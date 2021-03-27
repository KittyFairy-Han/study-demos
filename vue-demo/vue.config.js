/*

 * @Author: hanqing5

 * @Date: 2019-10-10 09:43:26

 * @LastEditors: your name

 * @LastEditTime: 2020-09-06 22:35:46

 * @Description: vue webpack 配置

 */

const webpack = require("webpack");
const path = require("path");
module.exports = {
  
  //全部配置项参考官网 https://cli.vuejs.org/zh/config/
  /**

     *部署应用包时的基本 URL

     * production  生产环境的时候 修改test为后端提供的上下文

     * development 开发模式的时候 默认使用后者"/"进行开发

     * process.env.BASE_URL 这个值会默认读取你在这边的配置，当后端的上下文会有修改的时候可以在ajax的请求文件里面统一添加process.env.BASE_URL

     * 保证请求的上下文能够拦截

     **/

  publicPath: process.env.NODE_ENV === "production" ? "" : "" /* 生产环境构建文件的根目录 */, //部署应用包时的基本 URL,
  outputDir: "../study-group-homework",
  /* 打包生成的入口html 即 index.html 的输出路径 (相对于 outputDir) */
  indexPath: "index.html",
  /* 打包后，放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。 */
  assetsDir: "static" /* 多页应用 */,
  pages: {
    index: {
      // 入口js
      entry: "src/main.js",
      template: "src/index.html", // 入口html
      filename: "index.html", // 打包输出路径
    }, // ...更多页
  } /* 浏览器中是否显示源码 */,
  productionSourceMap: true /* 第三方插件配置 */,
  pluginOptions: {
    // less自动导入
    "style-resources-loader": {
      preProcessor: "less", // patterns: [path.resolve(__dirname, 'less文件所在路径')]
    },
  } /* webpack相关配置 */ /* 基于环境有条件地配置webpack, 该函数会在环境变量被设置之后懒执行 */,
  configureWebpack: (config) => {
    // console.log(config)
    let productionPlgs = [
      // new MyAwesomeWebpackPlugin()
      // ...其他生产环境应用的插件
    ];
    let serverPlgs = [
      // new MyAwesomeWebpackPlugin()
      // ...其他开发环境应用的插件
    ];
    let commonPlgs = [
      // 静态资源拷贝插件
      // dev 和 product 打包时，src/assets/js 目录下的文件直接拷贝到打包后的 ./static/js 目录下
    ]; // 分环境修改配置
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlgs);
    } else {
      config.plugins.push(...serverPlgs);
    }
    config.plugins.push(...commonPlgs);
  } /* 后端代理 */,

  devServer: {
    //全部配置项参考 https://webpack.js.org/configuration/dev-server/
    proxy: {
      "/qzq-front-basic": {
        target: "http://10.16.65.107:3000", //拦截 qzq-front-basic 作为上下文的请求 替换为  http://10.19.141.64:3000
      }, //更多代理...
    },
  },
  lintOnSave: false,
};
