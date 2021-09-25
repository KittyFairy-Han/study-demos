/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:33:30
 * @LastEditors: your name
 * @LastEditTime: 2021-09-25 15:14:05
 * @Description: dev.js 和 prod.js 都会引用到的一些方法
 */

const path = require("path");
const fs = require("fs");

function getAppKeys() {
  const pluginsPath = path.resolve(__dirname, "../src/apps");
  const appKeys = fs.readdirSync(pluginsPath);
  return appKeys;
}
function getPageNames(appKey) {
  const pagesPath = path.resolve(__dirname, `../src/apps/${appKey}`);
  const pageNames = fs.readdirSync(pagesPath);
  return pageNames;
}

function setPage(appKey, pageName) {
  return {
    // page 的入口(相对于项目的跟目录)
    entry: `src/apps/${appKey}/${pageName}/main.js`,
    // 模板来源(相对于项目的跟目录)
    template: `src/common/template/index.html`,
    // 输出位置(相对于 outputDir
    filename: `${appKey}-${pageName}.html`,
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: `${appKey}标签${pageName}页面`,
  };
}
module.exports = {
  getAppKeys,
  getPageNames,
  setPage,
};
