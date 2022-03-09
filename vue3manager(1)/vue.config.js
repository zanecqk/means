module.exports  = {
    devServer:{
        // 配置代理 由vue小型NODE服务器进行 代理服务器请求 再给到axios
        proxy:{
            '/api':{
                target:'http://127.0.0.1:3000',
                changeOrigin:true  //是否跨域 是
            }
        }
    }
}