<!--
 * @Author: 鱼小柔
 * @Date: 2021-02-28 10:06:15
 * @LastEditors: your name
 * @LastEditTime: 2021-07-04 22:47:56
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
const loApi = require("lottie-api/dist/lottie_api");
const JSON_DATA = require("../../public/lottery.json");
export default {
  data() {
    return {
      lottieAnim: null,
      result:0
    };
  },
  async mounted() {
    this.lottieAnim = this.loadLottieAnimation(JSON_DATA);
    await this.playStep1();
    await Promise.all([this.getData(), this.playStep2Roll()]);
    this.changeText()
    await this.playStep3();
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
        }, 3000);
      });
      this.result = result;
      this.pending = false;
    },
    async playStep2Roll() {
      while (this.pending) {
        await this.playStep2();
      }
    },
    playStep1() {
      return new Promise((resolve) => {
        this.lottieAnim.playSegments([0, 50], true);
        this.lottieAnim.addEventListener("complete", () => {
          // console.log(1)
          resolve("complete1");
          this.lottieAnim.removeEventListener("complete");
        });
      });
    },
    playStep2() {
      return new Promise((resolve) => {
        this.lottieAnim.playSegments([51, 62], true);
        this.lottieAnim.addEventListener("complete", () => {
          // console.log(2)
          resolve("complete2");
          this.lottieAnim.removeEventListener("complete");
        });
      });
    },
    playStep3() {
      return new Promise((resolve) => {
        this.lottieAnim.playSegments([63, 90], true);
        this.lottieAnim.addEventListener("complete", () => {
          resolve("complete3");
          this.lottieAnim.removeEventListener("complete");
        });
      });
    },
    async changeText() {
      this.lottieAnim.renderer.elements[0].updateDocumentData({ t: '￥'+this.result }, 0);
    },
    async changeTextBySvg() {
      const node = document.querySelector("#J_txt tspan");
      if (node) {
        node.innerHTML = newTxt;
      }
    },
    async changeTextByApi() {
      const api = loApi.createAnimationApi(anim);
      const elements = api.getKeyPath("comp1,textnode"); // 查找对象
      elements.getElements()[0].setText(newTxt);
    },
    async changeTextByJs() {
      const resp = await fetch(this.path);
      const data = await resp.json(); //转换为js对象
      data.layers[0].t.d.k[0].s.t = "new text"; //找到对应的属性，改变属性的值
      return data;
    },
    async changeTextByStr() {
      const path =
        "https://gw.alipayobjects.com/os/finxbff/2d0c4a95-568f-4923-bef0-e20fca6018ca/7abc1e3d-c381-49ed-ad54-3a48366f0180.json";
      const resp = await fetch(path);
      const str = await resp.text(); //转换为字符串
      const newStr = str.replace("${文本}", "new text"); //找到对应的属性，改变属性的值
      return JSON.parse(newStr);
    },
    async changePic() {
      const resp = await fetch(this.path);
      const data = await resp.json();
      data.assets[0].p =
        "https://gw.alipayobjects.com/mdn/rms_91e1e4/afts/img/A*2mfsTo-gbDgAAAAAAAAAAABkARQnAQ";
      return data;
    },
  },
};
</script>

<style lang="less">
#lottie-demo {
  height: 575px;
  
}
.jbz{
    background: linear-gradient(#e66465, #e7c814);
     -webkit-background-clip: text;
    color: transparent;
    // text-shadow:  rgb(233, 231, 223) 1px 1px 5px;;
  }
</style>
