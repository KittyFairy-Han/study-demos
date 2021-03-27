/*
 * @Author: hanqing5
 * @Date: 2019-10-18 10:59:04
 * @LastEditors: hanqing5
 * @LastEditTime: 2020-12-05 11:45:11
 * @Description: 基础组件自动化全局注册
 */
import Vue from "vue"
const componentContext = require.context(".", true, /.vue$/)

const install = (Vue) => {
  for (let filePath of componentContext.keys()) {
    const componentModule = componentContext(filePath)
    const componentName = componentModule.default.name || makeComponentName(filePath)
    const componentConfig = componentModule.default || componentModule
    // console.log(filePath, ` ${componentModule.default.name}->${name} `, componentModule)
    // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    Vue.component(componentName, componentConfig)
  }
}

const makeComponentName = (filePath) => {
  // 文件名
  let formatName = filePath
    .split("/")
    .pop()
    .split(".")
    .shift()
  // 驼峰式 变 连接符形式
  formatName = formatName.replace(/([A-Z])/g, (match, p, index) => {
    // console.log(match, index)
    if (index > 0) {
      return "-" + match.toLowerCase()
    } else {
      return match.toLowerCase()
    }
  })

  // 返回值
  return formatName
}
Vue.use({
  install,
})
