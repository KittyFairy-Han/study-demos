<!--
 * @Author: hanqing5
 * @Date: 2020-12-04 11:16:31
 * @LastEditors: your name
 * @LastEditTime: 2021-09-05 23:38:49
 * @Description: 文件描述
-->
<template>
  <div id="app">
     <main class="demo-home-root">当前位置：home页面</main>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
import $ from 'jquery'
export default {
  created(){
    console.log($)
    // console.log(Echarts)
  }
}
</script>

<style lang="less">
.demo-home-root{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 50px;
}
</style>
