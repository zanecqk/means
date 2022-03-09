import axios from 'axios'
import { ElMessage } from 'element-plus' 
import store from '../store'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // axios超过五秒 自动报错 超时处理 不能一直等待服务器 
    timeout: 5000
})


// 请求拦截器 
// token 请求之前 要带上 token 如果有的话 
service.interceptors.request.use(
    config =>{
        if(store.getters.token) {
            config.headers.Authorization = `Bearer ${store.getters.token}`
        }
        return config  //配置好后要return 生成
    },
    error=>{
        console.log('请求拦截器 没有成功')
    }
)




// 响应拦截器 
service.interceptors.response.use(
    response => {
        const {info} = response.data 
         console.log('请求拦截器 初始数据',response.data)
        if(info=='success') {
            return response.data
        }else {
            ElMessage.error(info)
            // if(response.data.code=='403')
            console.log('response 拦截器错误情况 响应拦截',response)
            if(response.data.code =='403') {
                store.dispatch('user/logout')
            }``
            return Promise.reject('请求出错了')
        }
    }, error => {
        ElMessage.error(error.message)
        return Promise.reject(error)
    })


export default service