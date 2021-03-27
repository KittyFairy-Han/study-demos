/*
 * @Author: hanqing5
 * @Date: 2020-12-01 15:02:10
 * @LastEditors: your name
 * @LastEditTime: 2020-12-19 22:15:37
 * @Description: demo 插件路由配置
 */
import Vue from "vue";
import Router from "vue-router";
import Route1 from "./views/Route1";
Vue.use(Router);
// 更多路由配置细节参考 vue-router 官方文档 https://router.vuejs.org/zh/guide/
export default new Router({
  routes: [
    {
      path: "/",
      component: Route1,
    },
    {
      path: "/r2",
      component: () =>
        import(
          /* webpackChunkName: "demo-home-route2" */
          "./views/Route2"
        ),
    },
    /* other-routes */
  ],
});
