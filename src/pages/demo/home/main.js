/*
 * @Author: hanqing5
 * @Date: 2019-10-10 09:43:25
 * @LastEditors: your name
 * @LastEditTime: 2021-02-13 17:10:39
 * @Description: 入口js
 */

import "../../../assets/less/reset.less"; //样式重置
import Vue from "vue";
import App from "./App.vue";
/* 使用mock数据 */
import { useMock } from "../../../common/io/base-mock";
useMock(require("./io/mocks").default);
/* 如果需要VueRouter，引入该插件的路由配置 */
import router from "./router";
/* 如果需要Vuex，引入该插件的状态管理 */
import store from "./store";
/* 注册与服务端通信的方法 */
import "../../../common/client-communication/client-call";
/* 自定义基础组件全局自动注册 */
import "../../../components/base";
/* 如果需要国际化，创建 i18n 实例，设置语言为 "zh-CN"(中文) */
import { createLangModules } from "../../../common/lang/base-lang"
const i18n = createLangModules(require.context(`./lang`, false, /.js$/),"zh-CN");
/* 模拟客户端点击动作 */
console.log(window.clientCallJs);
// window.clientCallJs(JSON.stringify({ skin: "green", data: [1, 2, 3] }));
/* 创建Vue实例 */
new Vue({
  router,
  store, //如果没有配置就不传入
  i18n,
  render: (h) => h(App),
}).$mount("#app");


