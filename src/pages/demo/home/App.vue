<!--
 * @Author: hanqing5
 * @Date: 2020-12-04 11:16:31
 * @LastEditors: your name
 * @LastEditTime: 2020-12-15 08:56:25
 * @Description: 文件描述
-->
<template>
  <div id="app">
    <router-view />
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

<style lang="less"></style>
