/*
 * @Author: 鱼小柔
 * @Date: 2021-02-13 16:32:46
 * @LastEditors: your name
 * @LastEditTime: 2021-02-13 16:42:50
 * @Description: file content
 */
// 开发环境或者是生成环境下自测
export function useMock(mockList) {
  if (process.env.NODE_ENV === "development" || process.env.USE_TEST) {
    const Mock = require("mockjs");
    for (let mockItem of mockList) {
      // console.log(val)
      Mock.mock(...mockItem);
    }
  }
}
