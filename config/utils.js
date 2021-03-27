/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:33:30
 * @LastEditors: your name
 * @LastEditTime: 2020-12-26 16:31:15
 * @Description: dev.js 和 prod.js 都会引用到的一些方法
 */

const path = require("path");
const fs = require("fs");

function getPluginKeys() {
  let pluginsPath = path.resolve(__dirname, "../src/pages");
  const pluginKeyList = fs.readdirSync(pluginsPath);
  return pluginKeyList;
}
function getPageNameList(pluginKey) {
  let pagesPath = path.resolve(__dirname, `../src/pages/${pluginKey}`);
  let pageNameList = fs.readdirSync(pagesPath);
  return pageNameList;
}

function setPage(pluginKey, pageName) {
  return {
    // page 的入口(相对于项目的跟目录)
    entry: `src/pages/${pluginKey}/${pageName}/main.js`,
    // 模板来源(相对于项目的跟目录)
    template: `src/common/template/index.html`,
    // 输出位置(相对于 outputDir
    filename: `${pluginKey}-${pageName}.html`,
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: `${pluginKey}标签${pageName}页面`,
  };
}
module.exports = {
  getPluginKeys,
  getPageNameList,
  setPage,
};
