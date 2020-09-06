<template>
  <main class="record-card">
    <div>
      <button class="add-card" @click="addCard">增加卡片</button>
    </div>
    <total :pre="pre" :cur="cur"></total>
    <div>
      <card
        v-for="item in cards"
        :card="item"
        :key="item.value+Math.random()"
        @handleChange="changeState"
      ></card>
    </div>
  </main>
</template>
<script>
import Card from "../components/Card.vue";
import Total from "../components/Ttal.vue";

export default {
  name: "",
  components: { Card, Total },
  data() {
    return {
      cards: [],
      cur: 0,
      pre: 0,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeState(it) {
      this.pre = this.cur;
      this.cur = it.value;
      this.cards.forEach((item) => {
        item.state = "";
        if (item.value == this.pre) {
          item.state = "pre";
        }
        if (item.value == this.cur) {
          item.state = "current";
        }
      });
    },
    addCard() {
      this.cards.push({
        value: this.cards.length + 1,
        state: "",
      });
    },
  },
};
</script>

<style lang="less">
.add-card {
  width: 80%;
  height: 50px;
  margin: 20px 10%;
  display: flex;
  justify-content: space-around;
  input {
    /*border:#7c7dd7 solid 1px;*/
    outline: #7c7dd7 solid 1px;
    flex: 1;
  }
  button {
    width: 20%;
    background-color: #7c7dd7;
    color: white;
    font-size: 14px;
    box-shadow: 0 0 5px white;
  }
}
</style>
