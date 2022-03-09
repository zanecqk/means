import {login,getUserInfo} from '@/api/sys'
// 引入本地存储的设置 方法
import {setItem,getItem,removeAllitem} from '@/utils/storage' 
// 引入固定的常量 以防止变量的手写错误 
import {TOKEN} from '@/constant/index'

import router from '@/router'
export default {
    // 要把文件夹的嵌套命名空间打开 
    namespaced:true,
    // 文件夹内部的 vuex全功能 
    // 局部全局数据
    state:()=>({
        token:getItem(TOKEN) || '',
        userInfo:{}
    
    }),
    // 局部变异器s
    mutations:{
        setToken(state,token) {
            state.token = token 
            setItem(TOKEN,token )
        },
        setUserInfo(state,userInfo) {
            state.userInfo = userInfo
            sessionStorage.setItem('userinfo',JSON.stringify(userInfo))
        }
    },
    // 局部的时间机器 
    actions:{
        // 登录请求会写这里 因为登录是异步的
        login(context,userInfo) {
            console.log('user action login进来了')
            const {username,password} = userInfo
            
            return new Promise((resolve,reject)=>{
                login({
                    mobile:username,
                    password
                }).then(data=>{
                    console.log('this action ',this)
                    console.log('action回来的登录数据',data)
                    // 在vue3的里面  商店 action里面是有this指向 指向数据商店 store
                    this.commit('user/setToken',data.data._token)
                    resolve(data)
                }).catch(err=>{
                    reject(err)
                })
            })

        },

        async getUserInfo(context) {
            const res = await getUserInfo()
            this.commit('user/setUserInfo',res)
            return res 
        },

        // 退出登录逻辑
        logout() {
            // this store 
            this.commit('user/setToken','')
            this.commit('user/setUserInfo','')
            removeAllitem()
            sessionStorage.clear()
            router.push('/login')
        }
    }
}