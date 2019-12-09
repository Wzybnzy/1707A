module.exports = {
    devServer: {
        proxy: {
            "/api": {  // html  css image静态资源  不需要走代理 
                target: "http://106.13.85.240:7002/",  //目标地址  localhost:8080/api/user/login--->  http://106.13.85.240:7002/user/login   
                // target: "http://localhost:7002/",  //目标地址  localhost:8080/api/user/login--->  http://106.13.85.240:7002/user/login   
                changeOrigin: true, //允许跨域
                pathRewrite: { "^/api": "" }  //
            }
        }
    }
}