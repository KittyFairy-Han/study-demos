/*
 * @Author: hanqing5
 * @Date: 2019-10-10 09:43:26
 * @LastEditors: your name
 * @LastEditTime: 2021-09-25 15:37:01
 * @Description: vue webpack 配置
 */
const config =
  process.env.NODE_ENV === "production"
    ? require("./config/prod.js")
    : require("./config/dev.js");

module.exports = {
  

  publicPath: config.publicPath,
  // 输出包的根目录(相对于项目根目录
  outputDir: config.outputDir,
  // 静态资源目录（相对于outputDir
  assetsDir: "assets",

  pages:config.pages,

  css: {
    extract: config.cssExtract,
  },

  lintOnSave: false,
  productionSourceMap: false,
};
