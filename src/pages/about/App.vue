<!--
 * @Author: hanqing5
 * @Date: 2020-12-04 11:16:31
 * @LastEditors: your name
 * @LastEditTime: 2020-12-19 22:16:49
 * @Description: 文件描述
-->
<template>
  <div id="app">
    <h1>about页面</h1>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  created() {
    console.log(echarts)
  },
};
</script>

<style lang="less">
.demo-other-page {
  width: 500px;
  height: 500px;
}
</style>
