module.exports = {
    // 相当于webpack-dev-server，对本地服务器进行配置 
    devServer: {
        proxy: {
            "/music": {
                target: "https://y.music.163.com", // 需要跨域的目标url，我这里用到的是豆瓣API
                changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
                ws: true,
                pathRewrite: {
                    "^/music": '/'
                }
            },
            "/lg": {
                "target": "https://m.lagou.com",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/lg": "/"
                }
            },
            "/ds": {
                "target": "https://m.douban.com",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/ds": "/"
                }
            }
            // https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=jsonp1&start=0&count=8&loc_id=0&_=1589204373693
        }
    }
}