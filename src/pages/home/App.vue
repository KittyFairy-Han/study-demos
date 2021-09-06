<!--
 * @Author: hanqing5
 * @Date: 2020-12-04 11:16:31
 * @LastEditors: your name
 * @LastEditTime: 2021-09-05 23:38:49
 * @Description: 文件描述
-->
<template>
  <div id="app">
     <h1 class="home-title">当前位置：home页面</h1>
     <div id="chart-wrapper"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    const chartDom = document.getElementById("chart-wrapper");
    const myChart = echarts.init(chartDom);
    
    const option = {
      legend: {
        top: "bottom",
      },
      series: [
        {
          name: "面积模式",
          type: "pie",
          radius: [50, 250],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 38, name: "rose 2" },
            { value: 32, name: "rose 3" },
            { value: 30, name: "rose 4" },
            { value: 28, name: "rose 5" },
            { value: 26, name: "rose 6" },
            { value: 22, name: "rose 7" },
            { value: 18, name: "rose 8" },
          ],
        },
      ],
    };

    myChart.setOption(option);
  },
};
</script>

<style lang="less">
.home-title{
  text-align: center;
  font-size: 50px;
}
#chart-wrapper{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1000px;
  height: 800px;
}
</style>
