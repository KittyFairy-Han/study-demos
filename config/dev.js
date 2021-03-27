/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:29:41
 * @LastEditors: your name
 * @LastEditTime: 2021-02-13 09:56:48
 * @Description: 开发环境配置，会被vue.config.js引入和使用
 */

console.log(
  `=============开发环境   当前运行的命令是:${process.argv.slice(2)}   =============`
);

const { getPluginKeys, getPageNameList, setPage } = require("./utils");
module.exports = {
  publicPath: "/",
  // 输出包的跟目录(相对于项目跟目录
  outputDir: "dist",
  // 静态资源目录（相对于outputDir
  assetsDir: "assets",
  // 开发环境下，
  pages: (() => {
    const pages = {};
    const pluginKeyList = getPluginKeys();
    for (const pluginKey of pluginKeyList) {
      const pageNameList = getPageNameList(pluginKey);
      for (const pageName of pageNameList) {
        pages[`${pluginKey}-${pageName}`] = setPage(pluginKey, pageName);
      }
    }
    return pages;
  })(),
  // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
  // 设置为 true 或者一个对象，则代表提取，参考prod.js
  cssExtract: false,
  //入口js形成chunk后输出的文件名
  entryJsOutputTo:`[name].js`,
  //浏览器中是否显示源码
  productionSourceMap: true,
  // 接口代理
  devServer: {
    //全部配置项参考 https://webpack.js.org/configuration/dev-server/
    proxy: {
      "/iarrm-bldm": {
        //拦截 iarrm-bldm 作为上下文的请求 替换为  http://10.19.134.15:8386/iarrm-bldm
        target: "http://10.19.134.15:8386",
      },
      //更多代理...
    },
  },
};
