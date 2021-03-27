/*
 * @Author: 鱼小柔
 * @Date: 2020-03-22 12:38:14
 * @LastEditors: your name
 * @LastEditTime: 2020-09-13 09:42:33
 * @Description: 工具函数
 */
const srcContext = require.context("../");
export function rwFile(url, type = "") {
  const pagesContext = srcContext.keys().filter(item => item.indexOf(url) > -1);
  const pageNameList = [];
  for (const filePath of pagesContext) {
    const fileName = filePath.split("/").pop();
    if (fileName.indexOf(`.${type}`) > -1) {
      const name = fileName.split(".").shift();
      pageNameList.push(name);
    } else {
      console.log(`not a .${type} file`);
    }
  }
  return pageNameList;
}
