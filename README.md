<!--
 * @Author: hanqing5
 * @Date: 2019-10-10 09:43:26
 * @LastEditors: hanqing5
 * @LastEditTime: 2020-12-11 17:12:24
 * @Description: 工程说明
 -->

## 命令行

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build:<pluginDir>
```

## 使用说明

### [1] 静态资源目录 asstes

```html
<!-- src/pages/demo/views/Home.vue -->
<h1 class="text-overflow-h1">demo/home这是一个很长的标题溢出用省略号显示</h1>
```

```less
//src/pages/demo/views/Home.vue
@import url("../../../assets/less/utils.less");
.text-overflow-h1 {
  width: 500px;
  .text-ellipsis; //来自util.less
}
```

### [2] 共用逻辑目录 common

- 使用工具函数

```js
//src/pages/demo/views/Home.vue
import Utils from "../../../common/utils"
Utils.arrayDeRepetition([1, 2, 1]) //[1,2]
```
- 多语言 查看[7]多语言
- 使用事件发布订阅基类

```js
//src/pages/demo/event.js
import EventBus from "../../common/event"
// 定义事件类型
export const demoEventTypes = {
  CALLING: "0000010001",
}
// 定义观察者
export const demoObserver = new EventBus()

//src/pages/demo/views/Listner.vue -- 订阅事件
import { demoEventTypes, demoObserver } from "../event"
demoObserver.sub(demoEventTypes.CALLING, (data) => {
  console.log("Listner received", data) //Listner received this is home.vue
})
// 可在vue的beforedestroy钩子添加这句，用来解绑事件
// demoObserver.unsub(demoEventTypes.CALLING)

//src/pages/demo/views/Home.vue -- 发布事件
import { demoEventTypes, demoObserver } from "../event"
demoObserver.pub(demoEventTypes.CALLING, "this is home.vue")
```

### [3] 基础组件 components/base

```html
<!-- 例如指定 name为‘time-slice’、或者未指定文件名为TimeSlice.vue。使用是都是: -->
<time-slice></time-slice>
```

### [4] HUI 和 HuiPro components/hui-pro

```js
// src/components/hui-pro/index.js
import VehicleNumberInput from "@hui-pro/vehicle-number-input"
import "@hui-pro/vehicle-number-input/theme/index.scss"
Vue.use(VehicleNumberInput)
```

### [6] 异步操作 

```js
// io/apis/demo.js
// 引入 GET 和 POST 方法
import { getRequest, postRequest } from "./base-method"
const demoApis = {
  // 定义接口 (请求方法是 GET)
  queryDemoString: getRequest(`/iarrm-bldm/demo/getString`),
  // 定义接口（请求方法是 POST)
  saveDemoString: getRequest(`/iarrm-bldm/demo/updateString`),
}
export default demoApis

// src/pages/demo/Home.vue
import demoApis from "../../../io/apis/demo"
const queryResult = await demoApis.queryDemoString({
  id: 1,
})
const saveResult = await demoApis.saveDemoString({
  id: 1,
  str: "string from client",
})
```

```js
module.exports = {
  devServer: {
    //全部配置项参考 https://webpack.js.org/configuration/dev-server/
    proxy: {
      "/iarrm-bldm": {
        //拦截 iarrm-bldm 作为上下文的请求 替换为  http://10.19.134.15:8386/iarrm-bldm
        target: "http://10.19.134.15:8386", 
      },
      //更多代理...
    },
  },
}
```

```js
// io/mock/demo.js
export default [
  // 请求1 对应接口 `/iarrm-bldm/demo/getString`
  [
    // 对应的url
    // 注意 get 请求由于拼接参数到url上 所以用正则表达式
    RegExp("/iarrm-bldm/demo/getString.*"),
    // 对应请求方法
    "get",
    () => {
      return {
        type: 0,
        msg: "success",
        // 业务页面 拿到的返回值
        data: "hello client",
      }
    },
  ],
  // 请求2 对应接口 `/iarrm-bldm/demo/updateString`
  [
    // 对应的url
    "/iarrm-bldm/demo/updateString",
    // 对应请求方法
    "post",
    () => {
      return {
        type: 0,
        msg: "success",
        // 业务页面 拿到的返回值
        data: "成功",
      }
    },
  ],
]
```

- 在业务页面中使用：

```js
import { queryCar } from "../io/apis"
// argObj 就是后端要求的传参
// 假设在 mock 模式下 则返回结果为
const result = await queryCar.queryCarList(argObj) //[1,2,3]
const result = await queryCar.setCarState(argObj) //'设置成功'
// 因为网络各种原因不一定所有请求都成功（promise.resolve) 所以最好结合 try catch 使用
try {
  // promise.resolve 传回来的值
  const data = await queryCar.setCarState(argObj)
} catch (error) {
  // promise.reject 传回来的错误信息
  // 这样代码不会阻塞，下面的逻辑会继续执行
  console.log(error)
}
```
### [7] 国际化目录 lang

- 为每个语言包配置语言标识 示例如下:

```js
// pages/demo/lang/en.js
module.exports = {
  // 语言标识
  langName: 'en-US',
  // 语言包具体内容
  content: {
    title: 'multi-language test ', // 引用写法 $t('title') 
  }
}
// pages/demo/lang/zh.js
module.exports = {
  // 语言标识
  langName: "zh-CN",
  // 语言包具体内容
  content: {
    title: "多语言测试", // 引用写法 $t('title')
  },
}
// pages/demo/main.js
//引入读取语言包的方法
import { createLangModules } from "../../common/lang" 
//创建 i18n 实例，设置语言为 "zh-CN"(语言标识可选项就是每个语言包的标识)
const i18n = createLangModules(require.context(`./lang`, false, /.js$/), "zh-CN") 
new Vue({
  i18n,//传入i18n实例
  render: (h) => h(App),
}).$mount("#app")
// vue 实例中  this.$i18n.locale = "en-US" 切换为英文
```
``` vue
<!-- pages/demo/views/Home.vue -->
<h2>{{$t('title')}}</h2>
```
### [8] 换肤
``` less
/* skin/green/index.les */
@import "./theme.less";
@import "./style/home.less";
/* skin/green/theme.less */
@main-color:#08ff70;
@main-act-color:#e6941a;
@text-color:white;
/* skin/green/style/demo-home.less */
body{
    background-color: @main-color;
    color:@main-act-color;
}
```



