import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import center from './routes/center'
import cinema from './routes/cinema'
import film from './routes/film'
Vue.use(VueRouter)
 
const routes = [
  center,
  cinema,
  film,
  {
    path: '/',
    redirect:'/film/nowplaying'
  },
  {
    path: '/filmdetail/:filmid',
    name: 'filmdetail',
    component: () => import('../views/Detail/Detail.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/zhihu',

    component: () => import('../views/zhihu/zhihu.vue')
  },
  {
    path: '/element',

    component: () => import('../views/element/element.vue')
  },
  {
    path: '/vant',

    component: () => import('../views/element/vant.vue')
  },
  {
    path: '/city',

    component: () => import('../views/City/City')
  },
  {
    path: '/vuex',

    component: () => import('../views/element/vuex.vue')
  },
  {
    path:'/register',
    component:()=>import('../views/user/register.vue')
  },
  {
    path:'/login',
    component:()=>import('../views/user/login.vue')
  }
]

const router = new VueRouter({
  routes
})  


// 路由守卫  不登录注册 可以访问部分功能  登陆注册 才能访问全部功能  
router.beforeEach((to,from,next)=>{
  // arr  给一个 不登录就不能去的页面的数组
  let arr = [
    '/cinema'
  ]

  if(!arr.includes(to.path)) {
    // 不包含在arr里面的是非敏感页面  不登录也能访问 
      next()
  } else {
     if(localStorage.getItem('_token')) {
       next()
     }else {
       next({path:'/login'})
     }
  }


})

export default router
