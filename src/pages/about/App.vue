<!--
 * @Author: hanqing5
 * @Date: 2020-12-04 11:16:31
 * @LastEditors: your name
 * @LastEditTime: 2021-09-05 22:51:37
 * @Description: 文件描述
-->
<template>
  <div id="app">
    <main class="demo-other-page">about页面</main>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
import $ from 'jquery'
export default {
  created(){
    console.log($)
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
