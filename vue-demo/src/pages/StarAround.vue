<!--
 * @Author: 鱼小柔
 * @Date: 2020-03-07 22:31:17
 * @LastEditors: your name
 * @LastEditTime: 2020-09-13 11:03:38
 * @Description: file content
-->
<template>
  <main class="some-selector">
    <rotate-carousel :itemSize="[150,150]" :totalSize="[800,100]" :list="list">
      <div slot-scope="{itemData}" class="selector-option">{{itemData.name}}</div>
    </rotate-carousel>
  </main>
</template>

<script>
import rotateCarousel from "../components/rotateCarousel";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "选将村小学",
        },
        {
          id: 2,
          name: "前卫镇中心小学",
        },
        {
          id: 3,
          name: "前卫镇初级中学",
        },
        {
          id: 4,
          name: "绥中县第一高级中学",
        },
        {
          id: 5,
          name: "杭州电子科技大学",
        },
        {
          id: 6,
          name: "兑吧",
        },
        {
          id: 7,
          name: "海康威视",
        },
      ],
    };
  },
  components: {
    rotateCarousel,
  },
};
</script>

<style lang="less">
.some-selector {
  width: 100%;
  height: 600px;
  .selector-option {
    width: 100%;
    height: 100%;
    background-color: aqua;
  }
}
</style>