<!--
 * @Author: 鱼小柔
 * @Date: 2021-02-28 10:06:15
 * @LastEditors: your name
 * @LastEditTime: 2021-07-19 00:25:32
 * @Description: 学习 lottie
-->
<template>
  <main>
    <h1 class="jbz">学习lottie</h1>
    <div id="lottie-demo" ref="LottieD"></div>
  </main>
</template>

<script>
import lottie from "lottie-web";
const JSON_DATA = require("../../public/lottery/data.json");
export default {
  data() {
    return {};
  },
  async mounted() {
    const data = this.changeData();
    this.loadLottieAnimation(data);
  },
  methods: {
    changeData(){
      JSON_DATA.assets[0].u = ""; //图片所在的相对目录
      JSON_DATA.assets[0].p =
        "https://img2.baidu.com/it/u=3027700886,229179963&fm=26&fmt=auto&gp=0.jpg"; //'图片名称'
      const str = JSON.stringify(JSON_DATA);
      const newStr = str
        .replace("￥金额", "中奖啦")
      const newJson = JSON.parse(newStr);
      return newJson;    
    },
    changeDataByStr() {
      const str = JSON.stringify(JSON_DATA);
      const newStr = str
        .replace("￥金额", "中奖啦")
        .replace("images/", "")
        .replace(
          "img_0.png",
          "https://img2.baidu.com/it/u=3027700886,229179963&fm=26&fmt=auto&gp=0.jpg"
        );
      const newJson = JSON.parse(newStr);
      return newJson;
    },
    changeDataByJS() {
      JSON_DATA.assets[0].u = ""; //图片所在的相对目录
      JSON_DATA.assets[0].p =
        "https://img2.baidu.com/it/u=3027700886,229179963&fm=26&fmt=auto&gp=0.jpg"; //'图片名称'
      JSON_DATA.layers[0].t.d.k[0].s.t = "中奖啦";
      return JSON_DATA;
    },
    loadLottieAnimation(data) {
      return lottie.loadAnimation({
        container: this.$refs.LottieD, //挂在到对应的dom节点
        renderer: "svg",
        loop: false,
        animationData: data,
        autoplay: true,
      });
    },
  },
};
</script>

<style lang="less">
#lottie-demo {
  height: 575px;
}
.jbz {
  background: linear-gradient(#e66465, #e7c814);
  -webkit-background-clip: text;
  color: transparent;
  // text-shadow:  rgb(233, 231, 223) 1px 1px 5px;;
}
</style>
