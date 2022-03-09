import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
// main js 是vue最先执行的文件 
let _token = localStorage.getItem('_token') 
if(_token) {
  store.commit('tokenadd',_token)
}


Vue.use(Vant);

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.eventbus = new Vue() 
Vue.prototype.eventbus2 = new Vue() 

Vue.use(VueLazyload,{
  // loading:'https://ftp.bmp.ovh/imgs/2021/03/e75890093bd57098.gif'
  loading:'/svg/vlazy.svg'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
