/*
 * @Author: hanqing5
 * @Date: 2019-10-18 16:36:06
 * @LastEditors: your name
 * @LastEditTime: 2021-01-24 23:26:59
 * @Description: 工具函数类
 */

export default class Utils {
  /**
   * @description: 数组去重
   * @param {Array}
   * @return {Array}
   */  
  static arrayDeRepetition(array) {
    return [...new Set(array)]
  }
}

export function unusing(){
  console.log("UNUSING")
}
export function using(){
  console.log("USING")
}
/* TODO */
// other util functon
// ...
