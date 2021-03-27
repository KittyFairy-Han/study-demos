/*
 * @Author: 鱼小柔
 * @Date: 2020-03-07 22:31:17
 * @LastEditors: your name
 * @LastEditTime: 2020-11-29 21:35:09
 * @Description: file content
 */
/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");




