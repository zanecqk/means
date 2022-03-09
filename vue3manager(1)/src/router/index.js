import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    name:'Home',
    component: () => import('@/layout/index'),
    redirect:'/menu/one',
    children:[
      // 需要动态推入 根据sidebar 权限的组件
    //   {
    //     path: "menu/one",
    // component: () => import("@/components/profile.vue")
    //   }
    ]
  },
  {
    path: '/test',
    component: () => import('@/views/About')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})



// 私密路由表 根据权限情况 选择是否动态推入  
const map = {
  "/menu/one": {
    path: "menu/one",
    component: () => import("@/components/profile.vue"),
    meta:{
      index1:'首页',
      index2:'个人中心'
    }
  },
  "/menu/two": {
    path: "menu/two",
    component: () => import("@/components/rolemanager.vue"),
    meta:{
      index1:'用户',
      index2:'用户管理'
    }
  },
  "/menu/three": {
    path: "menu/three",
    component: () => import("@/components/rolemanager.vue"),
    meta:{
      index1:'用户',
      index2:'权限管理'
    }
  },
  "/menu/four": {
    path: "menu/four",
    component: () => import("@/components/rolelist.vue"),
    meta:{
      index1:'用户',
      index2:'权限列表'
    }
  },
  "/menu/five": {
    path: "menu/five",
    component: () => import("@/components/articlerank.vue"),

    meta:{
      index1:'文章',
      index2:'文章排名'
    }
  },
  "/menu/six": {
    path: "menu/six",
    component: () => import("@/components/createaritcle.vue"),
    meta:{
      index1:'文章',
      index2:'创建文章'
    }
  },
  "/menu/seven": {
    path: "menu/seven",
    component: () => import("@/components/staffsalary.vue"),
    meta:{
      index1:'员工',
      index2:'员工薪水'
    }
  },
  "/menu/eight": {
    path: "menu/eight",
    component: () => import("@/components/seniorsalary.vue"),
    meta:{
      index1:'员工',
      index2:'高管薪水'
    }
  },
  "/menu/nine": {
    path: "menu/nine",
    component: () => import("@/components/seniorsalary.vue"),
    meta:{
      index1:'车辆',
      index2:'车辆info'
    }
  },
  "/menu/eleven": {
    path: "menu/eleven",
    component: () => import("@/components/secretary.vue"),
    meta:{
      index1:'人事',
      index2:'秘书管理'
    }
  },
  "/menu/twelve": {
    path: "menu/twelve",
    component: () => import("@/components/Reception.vue"),
    meta:{
      index1:'人事',
      index2:'前台管理'
    }
  }
}



// 动态路由核心技术  
export const initDyminicRouter = () =>{
   const routes = router.options.routes 
   console.log('routes',routes)
   const route = routes.find((route)=>route.name =='Home')
   console.log('route',route) 
 
  if(!sessionStorage.getItem('userinfo')) {
    // 没有userinfo 权限的时候 算法空转 别报错
      sessionStorage.setItem('userinfo', JSON.stringify({rights:[]}))
  }
   var rights =  JSON.parse(sessionStorage.getItem('userinfo')).rights
  //  根据 用户的全选  左侧sidebar 的页面 分析出权限 推入左侧sidebar 需要的真实路由以及组件
   rights.forEach((right)=>{
      right.children.forEach((child)=>{
        if(map[child.path]) {
          route.children.push(map[child.path])
          console.log('route',route)
        }
      })
      // 刷新 重置路由
      router.addRoute(route)
   })
 

}


initDyminicRouter()






//  白名单 
const whiteList = ['/login']
// 路由守卫
router.beforeEach(async (to,from,next)=>{
    console.log('store.getters.token',store.getters.token)
   if(store.getters.token) {
        if(to.path == '/login') {
          next()
        }else {
          // 有token的情况下没有用户信息
          if(!store.getters.hasUserInfo){
            // 如果有token的情况下 没有具体的用户信息 我就再次调用具体用户信息接口
              await store.dispatch('user/getUserInfo')
          }

          next()
        }
   }else {
      // 如果没有登陆过 没有token的情况
      if(whiteList.indexOf(to.path) > -1) {
        next()
      }else {
        next('/login')
      }
   }
})







export default router