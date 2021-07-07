<!--
 * @Author: 鱼小柔
 * @Date: 2021-02-28 10:06:15
 * @LastEditors: your name
 * @LastEditTime: 2021-07-04 22:47:56
 * @Description: 学习 lottie
-->
<template>
  <main>
    <h1>学习lottie</h1>
    <div id="lottie-demo" ref="LottieD"></div>
  </main>
</template>

<script>
import lottie from "lottie-web";
const loApi = require("lottie-api/dist/lottie_api");
const JSON_DATA = require('../../public/lottery.json')
export default {
  data() {
    return {
      path:'./lottery.json',
      anim: null,
    };
  },
  async mounted() {
    this.lottieAnim = this.loadLottieAnimation(JSON_DATA)
  },
  methods: {
     async getData(){
      const resp = await fetch(this.path);
      const data = await resp.json();
      return data 
    },
    loadLottieAnimation(data) {
      return lottie.loadAnimation({
        container: this.$refs.LottieD, //挂在到对应的dom节点
        renderer: "svg",
        loop: true,
        animationData: data,
      });
    },
    async changeText(newTxt) {
      // console.log(this.lottieAnim)
      this.lottieAnim.renderer.elements[0].updateDocumentData(
        { t: newTxt },
        0
      );
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
      return data
    },
    async hangeTextByStr() {
      const path =
        "https://gw.alipayobjects.com/os/finxbff/2d0c4a95-568f-4923-bef0-e20fca6018ca/7abc1e3d-c381-49ed-ad54-3a48366f0180.json";
      const resp = await fetch(path);
      const str = await resp.text(); //转换为字符串
      const newStr = str.replace("${文本}", "new text"); //找到对应的属性，改变属性的值
      return JSON.parse(newStr)
    },
    async changePic() {
      const resp = await fetch(this.path);
      const data = await resp.json();
      data.assets[0].p = "https://gw.alipayobjects.com/mdn/rms_91e1e4/afts/img/A*2mfsTo-gbDgAAAAAAAAAAABkARQnAQ"
      return data  
    },
   
  },
  
};
</script>

<style>
#lottie-demo {
  height: 575px;
}
</style>
