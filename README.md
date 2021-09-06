1. npm run build_test
2. 查看dist文件夹，打包结果应该是如下这样的：
``` code
  dist
  ├── home.html
  ├── about.html
  └── assets
     ├── js
     |    ├── home.[hash].js //home入口形成的
     |    ├── about.[hash].js //about入口形成的
     |    ├── chunk-echarts.[hash].js //通过splitchunk对echarts进行了拆分，独立出一个文件
     |    ├── chunk-vendors.[hash].js //splitchunk默认配置下，node_modules中的模块独立出一个文件
     |    ├── app-theme-0.[hash].js //配合app-theme-0.css
     |    └── app-theme-1.[hash].js //配合app-theme-1.css
     └── css
          ├── home.css //webpack默认配置会把入口js中的css代码单独拆分出一个css文件
          ├── about.css //webpack默认配置会把入口js中的css代码单独拆分出一个css文件
          ├── app-theme-0.css //通过import()动态引入主题文件，产生了一个独立的异步加载文件
          └── app-theme-1.css //通过import()动态引入主题文件，产生了一个独立的异步加载文件
```
3. 本地打开 home.html、about.html。能够正常启动。
4. home页面，浏览器控制台执行 setSkin('green')。能够应用绿色主题
