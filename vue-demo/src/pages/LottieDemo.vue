<!--
 * @Author: 鱼小柔
 * @Date: 2021-02-28 10:06:15
 * @LastEditors: your name
 * @LastEditTime: 2021-07-18 20:00:43
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
import loApi from "lottie-api";
const JSON_DATA = require("../../public/lottery/data.json");
export default {
  data() {
    return {
      lottieAnim: null,
      result:'',
      pending:true
    };
  },
  async mounted() {
    this.lottieAnim = this.loadLottieAnimation(JSON_DATA);
    const r1 = await this.step1st();
    console.log(r1);
    const [data] = await Promise.all([this.getData(),this.rollStep2nd()]);
    console.log(`will change “金额” to ${data}`)
    this.changeTextByApi()
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
    async getData() {
      this.pending = true;
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(parseInt((Math.random() + 1) * 100));
        }, 500);
      });
      this.pending = false;
      this.result = result
      return result
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
    async rollStep2nd() {
      while (this.pending) {
        await this.step2nd();
      }
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
    
    changeTextByLottie() {
      this.lottieAnim.renderer.elements[0].updateDocumentData({ t: '￥'+this.result }, 0);
    },
    
    changeTextByApi() {
      const api = loApi.createAnimationApi(this.lottieAnim);
      const elements = api.getKeyPath("result#DMNC_TXT").getElements(); // 查找对象
      const ele = elements[0]
      ele.setText('￥'+this.result);
    },

    changeTextBySvg() {
      const node = document.querySelector("#DMNC_TXT tspan");
      if (node) {
        node.innerHTML = '￥'+this.result;
      }
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
