<!--
 * @Author: 鱼小柔
 * @Date: 2020-08-26 22:45:26
 * @LastEditors: your name
 * @LastEditTime: 2020-09-06 16:18:08
 * @Description: file content
-->
<template>
  <section class="bottom-controller">
    <div class="camera-type-selector">
      <compass :allData="list" :segNum="7" :rRatio="1/3" :transitionType="2" :rotateDuration="3000">
        <template v-slot="{itemData}">
          <div class="camera-type-option" :style="{backgroundColor:itemData.color}">{{itemData.id}}</div>
        </template>
        <template v-slot:item-side>
            <div class="option-split"></div>
        </template>
      </compass>
    </div>
    <div class="area-selector"></div>
    <div class="sence-selector"></div>
  </section>
</template>

<script>
import Compass from "../components/CompassClippath";
function getColor(opacity) {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  const a = Math.random();
  return `rgba(${r},${g},${b},${opacity ? opacity : a})`;
}
export default {
  components: {
    Compass,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          color: "red",
          text: "卡口点位",
        },
        {
          id: 2,
          color: "orange",
          text: "人脸点位",
        },

        {
          id: 3,
          color: "yellow",
          text: "高空点位",
        },
        {
          id: 4,
          color: "green",
          text: "视频点位",
        },
        {
          id: 5,
          color: "#00BCD4",
          text: "休息休息",
        },
        {
          id: 6,
          color: "blue",
          text: "yyyy",
        },
        {
          id: 7,
          color: "purple",
          text: "oooo",
        },
        {
          id: 8,
          color: "pink",
          text: "kkkk",
        },
        {
          id: 9,
          color: "#ff5722",
          text: "yyyy",
        },
        {
          id: 10,
          color: "#abe5ec",
          text: "oooo",
        },
        {
          id: 11,
          color: "grey",
          text: "kkkk",
        },
        {
          id: 12,
          color: "#ea5ea8",
          text: "kkkk",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.bottom-controller {
  position: fixed;
  left: 10%;
  top: 10%;
  .camera-type-selector {
    width: 600px;
    height: 600px;
    .camera-type-option{
        width: 100%;
        height: 100%;
    }
    .option-split{
        width: 100%;
        height: 100%;
        background-color: black;
    }
  }
}
</style>