/*
 * @Author: hanqing5
 * @Date: 2019-10-23 16:06:44
 * @LastEditors: hanqing5
 * @LastEditTime: 2019-10-31 10:46:05
 * @Description: eslint 配置
 */
module.exports = {
  root: true,
  "plugins": [
    "html"
  ],
  // 指定ES版本ecmaVersion为7，也就是ES2016, 指定模块类型sourceType为module，如此便支持export和import来导出并引用文件
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
    
  },
  // 用户自定义规则
  'rules': {
    // 生产环境不debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
  
}
