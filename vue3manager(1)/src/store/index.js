import { createStore } from 'vuex'
import user from './modules/user.js'
export default createStore({
  state: {
    // 全局数据 
    // 缺点  
  },
  mutations: {
  },
  actions: {
  
  },
  // 嵌套存储 
  modules: {
    user
  },
  // 快捷访问 vuex中的
  getters:{
    token:state => state.user.token,
    userInfo: state => state.user.userInfo,
    hasUserInfo:state=>{
      return JSON.stringify(state.user.userInfo) != '{}'
    }
  }
})
