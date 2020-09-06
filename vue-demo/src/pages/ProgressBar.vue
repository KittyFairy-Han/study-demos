<template>
  <main class="progress-bar">
    <div class="bg" :style="pageStyle"></div>
    <my-progress
      :innerSet="innerSet"
      :bgImg="themeImg"
      :outerSet="outerSet"
      @percentChanging="changePercent"
    ></my-progress>
    <progress-setting
      @handleInner="changeInner"
      @handleOuter="changeOuter"
      :passPercentF="innerSet.percent"
    ></progress-setting>
    <section class="img-group">
      <div v-for="item in imgs">
        <img :src="item" @click="changeThemeImg(item)" />
      </div>
    </section>
    <div class="set-img">
      <label for="set-img">自定义图片:</label>
      <input id="set-img" placeholder="输入网址" v-model="themeImg" />
    </div>
  </main>
</template>

<script>
import MyProgress from "../components/MyProgress.vue";
import ProgressSetting from "../components/progerssSetting.vue";

export default {
  name: "",
  components: { MyProgress, ProgressSetting },
  props: {},
  data() {
    return {
      innerSet: {},
      themeImg: "",
      outerSet: {},
      imgs: [
        require("../img/bg1.jpg"),
        require("../img/bg2.jpg"),
        require("../img/bg3.jpg"),
        require("../img/bg4.jpg"),
        require("../img/bg5.jpg"),
        require("../img/bg6.jpg"),
        require("../img/bg7.jpg"),
        require("../img/bg8.jpg"),
      ],
    };
  },
  computed: {
    pageStyle() {
      return {
        backgroundImage: `url(${this.themeImg})`,
      };
    },
  },
  created() {},
  mounted() {},
  methods: {
    changeOuter(v) {
      this.outerSet = v;
    },
    changeInner(v) {
      this.innerSet = v;
    },
    changeThemeImg(v) {
      this.themeImg = v;
    },
    changePercent(v) {
      this.innerSet.percent = v;
    },
  },
  watch: {},
};
</script>

<style lang="less">
.progress-bar {
  overflow: scroll;
  position: fixed;
  width: 100%;
  height: 85%;
  background-color: whitesmoke;
  box-sizing: border-box;
  padding-bottom: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(50px);
    z-index: -1;
  }
  .img-group {
    margin: 5% 5% 0 10%;
    box-shadow: 0 0 10px #f0e6e6;
    border-radius: 20px;
    background-color: #f1ece59c;
    div {
      width: 40%;
      height: 30px;
      border-radius: 10px;
      float: left;
      margin: 2% 5%;
      overflow: hidden;
      text-align: center;
      box-shadow: 0 0 10px #e8cfaa;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
  .img-group::after {
    content: "";
    display: block;
    clear: both;
  }
  .set-img {
    margin-top: 2%;
    label {
      margin-right: 10px;
    }
    input {
      height: 30px;
    }
  }
}
</style>
