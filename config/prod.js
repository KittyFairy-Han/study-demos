/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:30:15
 * @LastEditors: your name
 * @LastEditTime: 2021-09-12 16:52:51
 * @Description: 开发环境配置，会被vue.config.js引入和使用
 */

const apps = {
  demo: {
    home: {
      entry: `src/apps/demo/home/main.js`, // page 的入口(相对于项目的根目录)
      template: `src/common/template/index.html`, // 模板来源(相对于项目的根目录)
      filename: `demo-home.html`, // 输出位置(相对于 outputDir
    },
    about: {
      entry: `src/apps/demo/about/main.js`,
      template: `src/common/template/index.html`,
      filename: `demo-about.html`,
    },
  },
  other: {
    home: {
      entry: `src/apps/other/home/main.js`,
      template: `src/common/template/index.html`,
      filename: `other-home.html`,
    },
  },
};

module.exports = {
  publicPath: "./",
  cssExtract: {
    // 入口js生成的chunk中提取出的css后，为css文件命名
    filename: `assets/css/[name].css`,
    // 非入口文件生成chunk后，设置css文件名。
    // 该项目中，非入口文件生成的css就是异步引入皮肤样式代码产生的，
    // 在import()时使用了魔法注释，形成chunk时，名称就是遵照魔法注释来的，
    // 我们希望最后生成的文件名与形成 chunk 时一致，所以仍然是 "assets/css/[name].css"
    // 如果这一项不配置则会取 filename 的值，所以我们得配置为默认的 "assets/css/[name].css"
    chunkFilename: `assets/css/[name].css`,
  },
  outputDir: `dist/${process.env.PLUGIN_KEY}`,
  pages: apps[process.env.PLUGIN_KEY],
};
