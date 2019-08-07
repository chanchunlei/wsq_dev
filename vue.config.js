module.exports = {
    // 路径
    publicPath: process.env.NODE_ENV === 'production' ? '/web/' : '/',
    // 打包
    outputDir: 'web',
    // 配置 跨域 代理请求
    devServer: {
        proxy: {
            // 服务器地址
            '/api': {
                target: 'http://192.168.3.217:8082/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    // 替换target中的请求地址，也就是说以后你在请求http://xxx.yuximi.com这个地址的时候直接写成/api即可
                    '^/api': ''
                }
            },
        }
    },
}