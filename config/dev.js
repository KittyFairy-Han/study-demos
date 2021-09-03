/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:29:41
 * @LastEditors: your name
 * @LastEditTime: 2021-02-13 09:56:48
 * @Description: 开发环境配置，会被vue.config.js引入和使用
 */

console.log(
  `=============开发环境   当前运行的命令是:${process.argv.slice(
    2
  )}   =============`
);

const { getPluginKeys, getPageNameList, setPage } = require("./utils");
module.exports = {
  publicPath: "/",

  // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
  // 设置为 true 或者一个对象，则代表提取，参考prod.js
  cssExtract: false,
};
