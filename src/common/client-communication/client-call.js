/*
 * @Author: hanqing5
 * @Date: 2020-12-07 14:51:07
 * @LastEditors: your name
 * @LastEditTime: 2021-02-10 10:49:49
 * @Description: 客户端像web控件传参的方法
 */

window.clientCallWeb = function(skin) {
  import(
    /* webpackChunkName: "app-themes-" */
    `../../skin/${skin}/index.less`
  );
  // webpack 魔法注释，生成的文件名为 app-themes-0、app-themes-1、...
};
