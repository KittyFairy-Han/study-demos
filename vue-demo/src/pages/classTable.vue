<template>
  <section class="class-table">
    <div class="one-day-title">
      <div class="day-name">日程</div>
      <div class="half-day-title">上午</div>
      <div class="half-day-title">下午</div>
    </div>
    <div v-for="(item) in classes" :key="item.day" class="one-day">
      <div class="day-name">{{item.day}}</div>
      <one-day :todayClass="item" @morningChange="changeMorning" @afternoonChange="changeAfternoon"></one-day>
    </div>
  </section>
</template>

<script>
import OneDay from "../components/OneDay.vue";
export default {
  name: "",
  components: {
    OneDay,
  },
  props: {},
  data() {
    return {
      classes: [
        {
          day: "周1",
          morning: " ",
          afternoon: "",
        },
        {
          day: "周2",
          morning: " ",
          afternoon: "",
        },
        {
          day: "周3",
          morning: " ",
          afternoon: "",
        },
        {
          day: "周4",
          morning: "",
          afternoon: "",
        },
        {
          day: "周5",
          morning: "",
          afternoon: "",
        },
        {
          day: "周6",
          morning: "",
          afternoon: "",
        },
        {
          day: "周r",
          morning: "",
          afternoon: "",
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeMorning(changeDay) {
      //console.log('changeM')
      this.classes.forEach((item) => {
        if (item.day === changeDay.day) {
          //console.log('zdl')
          item.morning = changeDay.morning;
        }
      });
    },
    changeAfternoon(changeDay) {
      //console.log('changeA')
      this.classes.forEach((item) => {
        if (item.day === changeDay.day) {
          item.afternoon = changeDay.afternoon;
        }
      });
    },
  },
  watch: {},
};
</script>

<style lang="less">
.class-table {
  width: 100%;
}
.one-day {
  width: 100%;
  height: 4rem;
  border-bottom: 1px #ab9d9d solid;
  .day-name {
    float: left;
    width: 20%;
    height: 4rem;
    background-color: black;
    color: white;
    line-height: 4rem;
    text-align: center;
  }
}
.one-day-title {
  display: flex;
  > div {
    background-color: black;
    float: left;
    color: white;
    border: 1px white solid;
    height: 2rem;
    line-height: 2rem;
  }
  .day-name {
    width: 20%;
  }
  .half-day-title {
    width: 40%;
  }
}
</style>
