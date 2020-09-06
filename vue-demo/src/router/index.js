/*
 * @Author: 鱼小柔
 * @Date: 2020-03-07 22:31:18
 * @LastEditors: your name
 * @LastEditTime: 2020-03-22 14:41:28
 * @Description: file content
 */
import Vue from "vue";
import Router from "vue-router";
import { rwFile } from "../common/node-utils";
import { toa_b } from "../common/utils";
Vue.use(Router);

const pageNameList = rwFile("/pages/", "vue");
const routes = pageNameList.map(pn => {
  const routePath = toa_b(pn)
  return {
    path: `/${routePath}`,
    component: () => import(`../pages/${pn}`)
  };
});

export default new Router({
  routes: [...routes],
  linkActiveClass: "active"
});
