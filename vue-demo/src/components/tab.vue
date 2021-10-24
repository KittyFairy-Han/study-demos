<!--
 * @Author: 鱼小柔
 * @Date: 2020-03-07 22:31:17
 * @LastEditors: your name
 * @LastEditTime: 2021-10-24 18:05:41
 * @Description: file content
-->
<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" v-for="rt in routes" :key="rt.name" :to="rt.path">
      <span class="tab-link">{{rt.name}}</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      routes: [],
    };
  },
  mounted() {
    this.routes = this.$router.options.routes;
  },
};
</script>

<style scoped lang="less" rel="stylesheet/stylus">
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  justify-content: space-between;
  overflow: scroll;
  .tab-item {
    padding: 0 5px;
    .tab-link {
      padding-bottom: 5px;
      color: grey;
    }
    &.active {
      .tab-link {
        color: #2c3e50;
        font-weight: 600;
      }
    }
  }
}
</style>
