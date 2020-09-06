<template>
  <main class="ligtht-item">
    <ligtht-item
      v-for="item in lights"
      :key="Math.random()"
      :lightState="item"
      @handleChange="changeState"
    ></ligtht-item>
  </main>
</template>
<script>
import ligthtItem from "../components/LigthtItem.vue";

export default {
  name: "",
  components: { ligthtItem },
  data() {
    return {
      lights: [
        { id: "L1", isLight: false, clickNum: 0 },
        { id: "L2", isLight: false, clickNum: 0 },
        {
          id: "L3",
          isLight: false,
          clickNum: 0,
        },
        { id: "L4", isLight: false, clickNum: 0 },
        { id: "L5", isLight: false, clickNum: 0 },
        {
          id: "L6",
          isLight: false,
          clickNum: 0,
        },
        { id: "L7", isLight: false, clickNum: 0 },
        { id: "L8", isLight: false, clickNum: 0 },
        {
          id: "L9",
          isLight: false,
          clickNum: 0,
        },
      ],
      text: "",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeState(it) {
      console.log(it);
      this.lights.forEach((item) => {
        if (item.id === it.id) {
          if (item.clickNum === 0) {
            item.clickNum++;
            item.isLight = true;
          } else {
            alert("已经点亮了");
          }
        } else {
          item.isLight = false;
          item.clickNum = 0;
        }
      });
    },
  },
};
</script>
<style lang="less">
.sort-button-group {
  margin: 0 7%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 50px;
  button {
    flex: 1;
    color: white;
    font-size: 20px;
    font-weight: bold;
    span {
      padding-right: 10px;
      font-size: 12px;
    }
  }
  button:first-child {
    background-color: #a271ff;
  }
  button:last-child {
    background-color: #2dca93;
  }
}

.todo-list,
.finish-list {
  background-color: #f5f6f5;
  margin: 20px 5%;
  h3 {
    padding: 3px;
  }
  .space-place {
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
  }
}

.add-task {
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
