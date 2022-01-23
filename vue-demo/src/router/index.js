/*
 * @Author: 鱼小柔
 * @Date: 2020-03-07 22:31:18
 * @LastEditors: your name
 * @LastEditTime: 2022-01-24 01:57:42
 * @Description: file content
 */
import Vue from "vue";
import Router from "vue-router";
import { rwFile } from "../common/node-utils";
import { toa_b } from "../common/utils";
Vue.use(Router);

const c1 = require.context("../pages/",false,/\.vue$/) //匹配一级子目录中的vue文件
const c2 = require.context("../pages/",true,/\.\/[A-Za-z0-9]+\/index\.vue$/) //匹配二级子目录下的index.vue
const filePathList = [...c1.keys(),...c2.keys()]
console.log('filePaths:',filePathList)

const routes = filePathList.map(filePath=>{
  const fileName = filePath.split("/").pop();
  const name = fileName.split(".").shift();
  const routePath = toa_b(name)
  // console.log('route:',name)
  return {
    path: `/${routePath}`,
    name,
    component: () => import(`../pages/${name}`)
  };
  
})




export default new Router({
  routes: [...routes],
  linkActiveClass: "active"
});
