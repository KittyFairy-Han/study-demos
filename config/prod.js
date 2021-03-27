/*
 * @Author: 鱼小柔
 * @Date: 2020-12-26 15:30:15
 * @LastEditors: your name
 * @LastEditTime: 2021-01-24 14:02:25
 * @Description: 开发环境配置，会被vue.config.js引入和使用
 */
console.log(
  `=======生产环境   当前运行的命令是:${process.argv.slice(2)}  插件key是:${process.env.PLUGIN_KEY}   =======`
);
const path = require("path");
const fs = require("fs");
const { getSkinKeys, getPageNameList, setPage } = require("./utils");
const defaultCacheGroup = {
  vendors: { name: "chunk-vendors", test: /[\\\/]node_modules[\\\/]/, priority: -10, chunks: "initial" },
  common: { name: "chunk-common", minChunks: 2, priority: -20, chunks: "initial", reuseExistingChunk: true },
};
module.exports = {
  publicPath: process.env.USE_TEST ? `./` : `online-path/`,
  outputDir: `plugins/${process.env.PLUGIN_KEY}`,
  assetsDir: "assets",
  // 生产环境下，多页面应用，根据环境变量，主入口是单个插件的多个页面的 main.js,输出一个对应的多页面插件包
  // 如果是 npm run build:all 这里的代码会走多次，最后输出多个插件对应的多个多页面插件包
  pages: (() => {
    const pages = {};
    const pageNameList = getPageNameList(process.env.PLUGIN_KEY);
    for (const pageName of pageNameList) {
      pages[pageName] = setPage(process.env.PLUGIN_KEY, pageName);
    }
    return pages;
  })(),
  cssExtract: {
    // 入口js生成的chunk中提取出的css后，为css文件命名
    filename: `assets/css/${process.env.PLUGIN_KEY}-[name].css`,
    // 非入口文件生成chunk后，设置css文件名。
    // 该项目中，非入口文件生成的css就是异步引入皮肤样式代码产生的，
    // 在import()时使用了魔法注释，形成chunk时，名称就是遵照魔法注释来的，
    // 我们希望最后生成的文件名与形成 chunk 时一致，所以仍然是 "assets/css/[name].css"
    // 如果这一项不配置则会取 filename 的值，所以我们得配置为默认的 "assets/css/[name].css"
    chunkFilename: `assets/css/[name].css`,
  },
  // 入口js形成chunk后输出的文件名 name 就是配置 entry 时的 key
  entryJsOutputTo: `assets/js/${process.env.PLUGIN_KEY}-[name].js`,
  productionSourceMap: process.env.USE_TEST ? true : false,
  cacheGroups: (() => {
    let skinsPath = path.resolve(__dirname, "../src/skin");
    let skinKeyList = fs.readdirSync(skinsPath);
    skinKeyList = skinKeyList.filter((item) => item != "style");
    let obj = Object.assign({}, defaultCacheGroup);
    for (const skinKey of skinKeyList) {
      obj[skinKey] = {
        name: "global-themes-" + skinKey,
        chunks: "async", //对entry产生的chunk继续分割
        test: new RegExp(`[\\\\/]src[\\\\/]skin[\\\\/]${skinKey}[\\\\/]`), //匹配对应的目录
        minSize: 0, //不限制块的大小，只要满足匹配就独立出chunk
        reuseExistingChunk: true, // 如果当前的 chunk 已被从 split 出来，那么将会直接复用这个 chunk 而不是重新创建一个
        priority: -30
      };
    }
    return {
      total: 2 + skinKeyList.length,
      obj,
    };
  })(),
};
