/*
 * @Author: hanqing5
 * @Date: 2019-10-10 09:43:26
 * @LastEditors: your name
 * @LastEditTime: 2021-01-24 14:15:46
 * @Description: vue webpack 配置
 */
const webpack = require("webpack");
const path = require("path");
const config =
  process.env.NODE_ENV === "production"
    ? require("./config/prod.js")
    : require("./config/dev.js");

const defaultCacheGroup = {
  vendors: {
    name: "chunk-vendors",
    test: /[\\\/]node_modules[\\\/]/,
    priority: -10,
    chunks: "initial",
    reuseExistingChunk: true,
  },
  common: {
    name: "chunk-common",
    minChunks: 2,
    priority: -20,
    chunks: "initial",
    reuseExistingChunk: true,
  },
};
module.exports = {
  //全部配置项参考官网 https://cli.vuejs.org/zh/config/

  publicPath: config.publicPath,
  // 输出包的跟目录(相对于项目跟目录
  outputDir: "dist",
  // 静态资源目录（相对于outputDir
  assetsDir: "assets",

  pages: {
    home: {
      // page 的入口(相对于项目的跟目录)
      entry: `src/pages/home/main.js`,
      // 模板来源(相对于项目的跟目录)
      template: `src/common/template/index.html`,
      // 输出位置(相对于 outputDir
      filename: `home.html`,
     
    },
    about: {
      // page 的入口(相对于项目的跟目录)
      entry: `src/pages/about/main.js`,
      // 模板来源(相对于项目的跟目录)
      template: `src/common/template/index.html`,
      // 输出位置(相对于 outputDir
      filename: `about.html`,
     
    },
  },

  css: {
    extract: config.cssExtract,
  },

  
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
    webpackConfig.output.filename(`[name].js`).end();
    /* 主动分 chunk */
    if (config.customCacheGroups) {
      webpackConfig.optimization.splitChunks({
        cacheGroups: Object.assign(config.customCacheGroups, defaultCacheGroup),
      });
    }
  },


  lintOnSave: false,
  productionSourceMap: false,
};
