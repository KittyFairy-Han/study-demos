/*
 * @Author: hanqing5
 * @Date: 2019-10-10 09:43:26
 * @LastEditors: your name
 * @LastEditTime: 2021-01-24 14:15:46
 * @Description: vue webpack 配置
 */
const config =
  process.env.NODE_ENV === "production"
    ? require("./config/prod.js")
    : require("./config/dev.js");

const defaultCacheGroups = {
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
  // 输出包的根目录(相对于项目根目录
  outputDir: "dist",
  // 静态资源目录（相对于outputDir
  assetsDir: "assets",

  pages: {
    home: {
      // page 的入口(相对于项目的根目录)
      entry: `src/pages/home/main.js`,
      // 模板来源(相对于项目的根目录)
      template: `src/common/template/index.html`,
      // 输出位置(相对于 outputDir
      filename: `home.html`,
      // splitchunks 改动之后要配置一下chunks，不能使用默认的了
      chunks: ['chunk-echarts','chunk-vendors', 'chunk-common', 'home']
    },
    about: {
      // page 的入口(相对于项目的根目录)
      entry: `src/pages/about/main.js`,
      // 模板来源(相对于项目的根目录)
      template: `src/common/template/index.html`,
      // 输出位置(相对于 outputDir
      filename: `about.html`,
      // 
      chunks: ['chunk-echarts','chunk-vendors', 'chunk-common', 'about']
    },
  },

  css: {
    extract: config.cssExtract,
  },

  

  /* webpack 链式 */
  chainWebpack: (webpackConfig) => {
    /* 入口js形成chunk后输出的文件名 */
    webpackConfig.output.filename(`[name].js`).end();
    /* 主动分 chunk */
    webpackConfig.optimization.splitChunks({
      cacheGroups: Object.assign({},defaultCacheGroups,config.customCacheGroups),
    });
  },


  lintOnSave: false,
  productionSourceMap: false,
};
