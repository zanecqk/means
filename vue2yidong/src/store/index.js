import Vue from 'vue'
import Vuex from 'vuex'
import { cinemaListData } from "@/api/api";
Vue.use(Vuex)

export default new Vuex.Store({
  // 全局数据盒子 
  state: {
    city: localStorage.getItem('city')  || '上海',
    count: 0,
    a2: {
      name: 'cluo',
      age: 35
    },
    cityid:localStorage.getItem('cityid')  ||  '310100',
    usermobile: '',
    token: '',
    filmlist: [],
    globalCinemaList:[]
  },
  // 突变  变异器  快速改变数据的地方 
  mutations: {
    // 第一个参数state 数据盒子  第二参数step 传值 
    //    this.$store.commit('add',1)
    add(state,step) {
      console.log('mutation add里面了')
      console.log('step',step) 
      state.count = state.count + step  

    },
    cityinfo(state,step) {
       console.log('mutation cityinfo')
       state.city = step.name 
       state.cityid = step.cityId
       localStorage.setItem('city',step.name) 
       localStorage.setItem('cityid',step.cityId)
    },
    addcinemalist(state,step) {
       state.globalCinemaList= step 
    },
    usermobile(state,step) {
      console.log('mutation usermobile') 
      state.usermobile = step 
    },
    tokenadd(state,step) {
      console.log('tokenadd mutation ') 
      state.token = step 
    }
  },
  //  处理异步数据 时间机器 通过dispatch唤醒
  actions: { 
    // context上下文的对象 里面包含context.commit帮助提交数据 
    // step 传参
    //   this.$store.dispatch('actionadd',22)
    actionadd(context,step ) {
      console.log('actions  actionadd')
      console.log('step',step) 
      setTimeout(()=>{
        context.commit('add',step)
      },3000)
    },

    // 大公司的用法  会把所有axios请求 外移到 action 里面 
    //  this.$store.dispatch('getNewCinemaList',this.$store.state.cityid)
    //  请求全局的电影院列表 axios请求
    getNewCinemaList(context,step) {
      console.log('actions  getNewCinemaList')
      cinemaListData(step).then((res)=>{
        console.log("vuex action 城市电影院列表", res);
        // this.cinemalist = res.data.data.cinemas;
        context.commit('addcinemalist',res.data.data.cinemas)
      })
    }
  },

  // vuex中的计算属性
  getters:{

    getcount:function(state) {
       return state.count + '￥'
    }
  }

})
