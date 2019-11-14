module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 添加需要被 babel 转义的模块
  // transpileDependencies:[],

  // 默认解析了js vue文件，因此不用特意配置
  // chainWebpack: config => {
  //   config.module
  //     .rule('js, vue')
  //     .include.add('/package')
  //     .end()
  //     .use('babel')
  //     .loader('babel-loader')
  //     .tap(options => options)
  // },
  productionSourceMap: false
}
