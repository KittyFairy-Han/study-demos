/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:30:15
 * @LastEditors: your name
 * @LastEditTime: 2021-01-24 14:02:25
 * @Description: 开发环境配置，会被vue.config.js引入和使用
 */

module.exports = {
  publicPath: process.env.USE_TEST ? `./` : `online-path/`,

  cssExtract: {
    // 入口js生成的chunk中提取出的css后，为css文件命名
    filename: `assets/css/[name].css`,
    // 非入口文件生成chunk后，设置css文件名。
    // 该项目中，非入口文件生成的css就是异步引入皮肤样式代码产生的，
    // 在import()时使用了魔法注释，形成chunk时，名称就是遵照魔法注释来的，
    // 我们希望最后生成的文件名与形成 chunk 时一致，所以仍然是 "assets/css/[name].css"
    // 如果这一项不配置则会取 filename 的值，所以我们得配置为默认的 "assets/css/[name].css"
    chunkFilename: `assets/css/[name].css`,
  },

  customCacheGroups: {
    "echarts": {
      name: "chunk-echarts",
      chunks: "initial",
      test: /(echarts)/,
      // priority: 0,//默认行为
      // minChunks:1,//默认行为
    },
    
  },
};
