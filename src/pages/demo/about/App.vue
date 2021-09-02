<!--
 * @Author: hanqing5
 * @Date: 2020-12-04 11:16:31
 * @LastEditors: your name
 * @LastEditTime: 2020-12-19 22:16:49
 * @Description: 文件描述
-->
<template>
  <div id="app">
    <main class="demo-other-page">当前位置：demo插件about页面</main>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
export default {
  created(){
    console.log(Echarts)
  }
}
</script>

<style lang="less">
.demo-other-page {
  width: 500px;
  height: 500px;
}
</style>
