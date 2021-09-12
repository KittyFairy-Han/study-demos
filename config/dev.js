/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:29:41
 * @LastEditors: your name
 * @LastEditTime: 2021-09-12 18:47:45
 * @Description: 开发环境配置，会被vue.config.js引入和使用
 */

const pages = {
  demoHome: {
    entry: `src/apps/demo/home/main.js`, // page 的入口(相对于项目的根目录)
    template: `src/common/template/index.html`, // 模板来源(相对于项目的根目录)
    filename: `demo-home.html`, // 输出位置(相对于 outputDir
  },
  demoAbout: {
    entry: `src/apps/demo/about/main.js`,
    template: `src/common/template/index.html`,
    filename: `demo-about.html`,
  },
  otherHome: {
    entry: `src/apps/other/home/main.js`,
    template: `src/common/template/index.html`,
    filename: `other-home.html`,
  },
};

module.exports = {
  publicPath: "/",
  // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
  // 设置为 true 或者一个对象，则代表提取，参考prod.js
  cssExtract: false,
  // 不自定义缓存组
  pages: pages,
};
