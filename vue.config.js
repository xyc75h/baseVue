module.exports = {

  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    // historyApiFallback: true,
    hot: true,
    inline: true,
    stats: { color: true},

    proxy: {
      '/api':{
        target: "yzk.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
