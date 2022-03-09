// 封装 axios请求的 公用方法 
import axios from 'axios'
// 设置请求拦截器 
// 核心封装思想 需要根据不同的请求选项 返回不同的数据 
// 电影列表页 X-Host: mall.film-ticket.film.list
// 具体详情页 X-Host: mall.film-ticket.film.info
// axios.defaults.headers.info = ' '
axios.interceptors.request.use(
    function (config) {
        let host = ''
        // config.headers.info 需要 别的地方 设置 才能有值 info默认 ''
        let info = config.headers.info
         
        console.log('此时来到了api文件夹下的http')
        console.log('info', info)
        if ("info" == info) {
            // 详情页面的头
            host = "mall.film-ticket.film.info";
        } else if ("cinema" == info) {
            // 影院列表
            host = "mall.film-ticket.cinema.list";
            //有城市的数据
        } else if ("city" == info) {
            host = "mall.film-ticket.city.list";
        } else {
            // 列表信息的头
            host = "mall.film-ticket.film.list";
        }
        config.headers = {
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
            "X-Host": host,
        };
        return config;
    },

    // 拦截器设置不成功的回调 
    function (err) {
        console.log('err 拦截器 设置失败')
    }
)



export default axios 
// 针对于 导出一个的时候使用 
// 暴露出去axios   这个axios已经经过请求拦截器的配置了 并且带header属性 