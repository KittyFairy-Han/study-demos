<!--
 * @Author: 鱼小柔
 * @Date: 2020-12-11 20:08:26
 * @LastEditors: your name
 * @LastEditTime: 2020-12-19 21:34:48
 * @Description: file content
-->
<template>
  <main  class="demo-home-root">
    <h1 class="text-overflow-h1">
      当前位置：demo插件home页面Route1路由，这是一个很长的标题溢出用省略号显示
    </h1>
    <h2 @click="toEnglish">{{ $t("title") }}</h2>
  </main>
</template>

<script>
import demoApis from "../io/apis";
export default {
  async created() {
    console.log(await demoApis.queryDemoString({ id: 1 }));
    console.log(
      await demoApis.saveDemoString({ id: 1, data: "str from client" })
    );
  },
  methods: {
    toEnglish() {
      this.$i18n.locale = "en-US";
    },
  },
};
</script>

<style lang="less">
@import url("../../../../assets/less/utils.less");
.text-overflow-h1 {
  width: 100%;
  height: 400px;
  .text-ellipsis;
}
</style>
