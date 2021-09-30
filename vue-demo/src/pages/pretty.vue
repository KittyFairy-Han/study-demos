<!--
 * @Author: hanqing5
 * @Date: 2020-12-04 11:16:31
 * @LastEditors: your name
 * @LastEditTime: 2021-09-05 23:38:49
 * @Description: 文件描述
-->
<template>
  <main class="pretty-page"></main>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      baseOption: {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["7.17", "8.6", "8.20", "9.3", "9.17", "9.30"],
        },
        yAxis: {
          type: "value",
          min: 5,
        },
      },
    };
  },
  mounted() {
    this.drawWeightChart();
    this.drawPercent();
    this.drawTwo();

    this.drawAllDetail();
    this.drawLeg();
    this.drawArm();
    this.drawIn();
  },
  methods: {
    drawWeightChart() {
      const series = [
        {
          name: "体重",
          type: "line",
          areaStyle: {},
          data: [98.6, 97.0, 96.2, 94, 94.2, 91.0],
        },
      ];

      this.draw(series);
    },
    drawPercent() {
      const series = [
        {
          name: "体脂率",
          type: "line",
          data: [34.2, 33.7, 34.2, 33.2, 32.2, 32.6],
        },
      ];

      this.draw(series);
    },
    drawLeg() {
      this.draw([
        {
          name: "腿部脂肪",
          type: "line",
          data: [5.8, 5.4, 5.6, 5.4, 5.4, 5],
        },
        {
          name: "腿部肌肉",
          type: "line",
          data: [10.04, 9.79, 9.98, 9.94, 10.03, 9.63],
        },
      ]);
    },
    drawArm() {
      this.draw([
        {
          name: "手臂脂肪",
          type: "line",
          data: [2.4, 2.4, 2.3, 2.2, 2.2, 2.1],
        },
        {
          name: "手臂肌肉",
          type: "line",
          data: [2.42, 2.44, 2.44, 2.32, 2.29, 2.34],
        },
      ]);
    },
    drawIn() {
      this.draw([
        {
          name: "内脏脂肪",
          type: "line",
          data: [7.7, 7.6, 7.6, 7.1, 6.8, 6.8],
        },
        {
          name: "内脏肌肉",
          type: "line",
          data: [13.6, 13.6, 13.8, 13.4, 13.2, 13.5],
        },
      ]);
    },
    drawTwo() {
      this.draw([
        {
          name: "体脂肪",
          type: "line",
          data: [16.8, 16.3, 16.4, 15.6, 15.2, 14.8],
        },
        {
          name: "骨骼肌",
          type: "line",
          data: [17, 16.9, 16.7, 16.5, 16.7, 16.1],
        },
      ]);
    },
    drawAllDetail() {
      this.draw([
        {
          name: "腿部脂肪",
          type: "line",
          data: [5.8, 5.4, 5.6, 5.4, 5.4, 5],
        },
        {
          name: "腿部肌肉",
          type: "line",
          data: [10.04, 9.79, 9.98, 9.94, 10.03, 9.63],
        },
        {
          name: "手臂脂肪",
          type: "line",
          data: [2.4, 2.4, 2.3, 2.2, 2.2, 2.1],
        },
        {
          name: "手臂肌肉",
          type: "line",
          data: [2.42, 2.44, 2.44, 2.32, 2.29, 2.34],
        },
        {
          name: "内脏脂肪",
          type: "line",
          data: [7.7, 7.6, 7.6, 7.1, 6.8, 6.8],
        },
        {
          name: "内脏肌肉",
          type: "line",
          data: [13.6, 13.6, 13.8, 13.4, 13.2, 13.5],
        },
        {
          name: "体脂肪",
          type: "line",

          data: [16.8, 16.3, 16.4, 15.6, 15.2, 14.8],
        },
        {
          name: "骨骼肌",
          type: "line",

          data: [17, 16.9, 16.7, 16.5, 16.7, 16.1],
        },
      ]);
    },
    draw(series) {
      const legend = { legend: series.map((item) => item.name) };
      const [min, max] = this.getSeriesMinMaxValue(series);
      const yAxis = { type: "value", min, max };
      const option = Object.assign({}, this.baseOption, {
        legend,
        series,
        yAxis,
      });
      const chartDom = document.createElement("div");
      chartDom.className = "chart-wrapper";
      document.querySelector(".pretty-page").append(chartDom);
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
    },
    getSeriesMinMaxValue(list) {
      const values = list.map((item) => item.data).flat();
      const max = Math.max(...values);
      const maxInt = Math.ceil(max);
      const min = Math.min(...values);
      const minInt = Math.floor(min);
      const len = values.length;
      return [minInt, maxInt];
    },
  },
};
</script>

<style lang="less">
.pretty-page {
  position: fixed;
  top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: scroll;
  .chart-wrapper {
    max-width: 500px;
    width: 100%;
    min-height: 500px;
    margin-bottom: 100px;
  }
}
</style>
