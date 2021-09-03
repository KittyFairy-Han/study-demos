/*
 * @Author: hanqing5
 * @Date: 2019-10-10 09:43:25
 * @LastEditors: your name
 * @LastEditTime: 2021-02-13 17:10:39
 * @Description: 入口js
 */


import Vue from "vue";
import App from "./App.vue";

window.setSkin = function(color) {
  import(
    /* webpackChunkName: "app-theme-" */
    `../../themes/${color}.less`
  );
};

/* 创建Vue实例 */
new Vue({
  render: (h) => h(App),
}).$mount("#app");


