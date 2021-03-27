/*
 * @Author: hanqing5
 * @Date: 2019-10-10 09:43:26
 * @LastEditors: your name
 * @LastEditTime: 2021-01-24 14:15:46
 * @Description: vue webpack 配置
 */
const webpack = require("webpack");
const path = require("path");
const config = process.env.NODE_ENV === "production" ? require("./config/prod.js") : require("./config/dev.js");

module.exports = {
  //全部配置项参考官网 https://cli.vuejs.org/zh/config/

  publicPath: config.publicPath,
  outputDir: config.outputDir,
  assetsDir: config.assetsDir,

  pages: config.pages,

  css: {
    extract: config.cssExtract,
  },

  /* webpack相关配置 */
  /* 基于环境有条件地配置webpack, 该函数会在环境变量被设置之后懒执行 */
  configureWebpack: (webpackConfig) => {
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        "process.env.USE_TEST": JSON.stringify(process.env.USE_TEST), //在webpack打包好的文件中也能使用node环境下编译时的变量
      })
    );
  },

  /* webpack 链式 */
  chainWebpack: (webpackConfig) => {
    /* 路径代理 */
    //less使用的时候要加 ~
    webpackConfig.resolve.alias
      .set("@", path.resolve(__dirname, "src/"))
      .set("@less", path.resolve(__dirname, "src/assets/less/"))
      .set("@bussiness", path.resolve(__dirname, "src/components/bussiness/"))
      .set("@common", path.resolve(__dirname, "src/common/"));
    webpackConfig.module.rule("less");
    /* 入口js形成chunk后输出的文件名 */
    webpackConfig.output.filename(config.entryJsOutputTo).end();
    /* 主动分 chunk */
    // if(config.cacheGroups){
    //   webpackConfig.optimization.splitChunks({
    //     maxInitialRequests: config.cacheGroups.total,
    //     cacheGroups: config.cacheGroups.obj,
    //   });
    // }
  },

  /* 后端代理 */
  devServer: config.devServer,
  lintOnSave: false,
  productionSourceMap: config.productionSourceMap,
};
