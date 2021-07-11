<!--
 * @Author: 鱼小柔
 * @Date: 2021-02-28 10:06:15
 * @LastEditors: your name
 * @LastEditTime: 2021-07-12 00:12:29
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
const JSON_DATA = require("../../public/lottery.json");
export default {
  data() {
    return {
      lottieAnim: null,
    };
  },
  async mounted() {
    this.lottieAnim = this.loadLottieAnimation(JSON_DATA);
    const r1 = await this.step1st();
    console.log(r1);
    const [r2,data] = await Promise.all([this.step2nd(), this.getData()]);
    console.log(r2,data);
    const r3 = await this.step3rd();
    console.log(r3);
  },
  methods: {
    loadLottieAnimation(data) {
      return lottie.loadAnimation({
        container: this.$refs.LottieD, //挂在到对应的dom节点
        renderer: "svg",
        loop: false,
        animationData: data,
        autoplay: false,
      });
    },
    getData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(parseInt((Math.random() + 1) * 100));
        }, 3000);
      });
    },
    step1st() {
      return new Promise((resolve) => {
        this.lottieAnim.playSegments([0, 50], true);
        this.lottieAnim.addEventListener("complete", () => {
          resolve("step1 end");
          this.lottieAnim.removeEventListener("complete"); //移除事件监听，不然在第二段播放的时候也会执行这个回调。
        });
        // 或者
        /* this.lottieAnim.onComplete = () => {
          resolve("step1 end");
          this.lottieAnim.onComplete = null //不移除也行，后面onComplete重新赋值会直接替换。
        }; */
      });
    },
    step2nd() {
      return new Promise((resolve) => {
        this.lottieAnim.playSegments([51, 60], true);
        this.lottieAnim.addEventListener("complete", () => {
          resolve("step2 end");
          this.lottieAnim.removeEventListener("complete");
        });
      });
    },
    step3rd() {
      return new Promise((resolve) => {
        this.lottieAnim.playSegments([61, 90], true);
        this.lottieAnim.addEventListener("complete", () => {
          resolve("step3 end");
          this.lottieAnim.removeEventListener("complete");
        });
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
