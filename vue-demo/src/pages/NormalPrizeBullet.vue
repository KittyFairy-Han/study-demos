<template>
  <section class="winner-bullet-screen">
    <bullet-screen :list="winners" ref="BSVm" v-model="indexOfWinners">
      <template slot-scope="{ item }">
        <div class="winner">{{ item.id }}</div>
      </template>
    </bullet-screen>
  </section>
</template>

<script>
async function getNorWinners() {
  return {
    prices: [
      {
        id: Math.random(),
      },
      {
        id: Math.random(),
      },
      {
        id: Math.random(),
      },
      {
        id: Math.random(),
      },
    ],
  };
}
import bulletScreen from "../components/BulletScreen";

export default {
  components: { bulletScreen },

  data() {
    return {
      indexOfWinners: 0,
      winners: [],
      nextBeginId: undefined, //获奖信息给后端的传参，用来保证信息连接不重复。（第一次不传参，用undefined正好过滤掉参数）
    };
  },

  mounted() {
    // 初始化弹幕
    this.initBulletScreen();
  },
  methods: {
    /* 弹幕 */
    async initBulletScreen() {
      const UPDATE_DURATION = 60 * 1000;
      await this.getWinners();
      this.$refs.BSVm.init();
      this.winTimer = setInterval(this.getWinners, UPDATE_DURATION);
    },
    async getWinners() {
      const MAX_LEN = 100; // 前端缓存列表的最大长度
      const { prices, last } = await getNorWinners(); // 获取最近一分钟的获奖信息，每分钟更新

      const norLen = this.winners.length + prices.length;
      if (norLen > MAX_LEN) {
        this.winners.splice(0, norLen - MAX_LEN);
      }
      this.winners.push(...prices); //缓存普通获奖
      this.nextBeginId = last; // 下次传参
    },
  },
  beforeDestroy() {
    this.winTimer && clearInterval(this.winTimer);
  },
};
</script>

<style lang="less" scoped>
button {
  background-color: transparent;
  border: none;
}

@btm-gradient-bg: linear-gradient(180deg, #662dad 0%, #1a0c3f 100%);

.el-fit-bgimg(@w,@h,@url) {
  width: @w;
  height: @h;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: @url;
}
.center-by-abs-margin(@w,@h) {
  position: absolute;
  width: @w;
  height: @h;
  margin-left: -@w / 2;
  margin-top: -@h / 2;
  left: 50%;
  top: 50%;
}
.text-overflow-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.refresh-api {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 32px;
  color: white;
  font-weight: 600;
}

@keyframes floatup {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes oshow {
  from {
    opacity: 0;
  }
}

.winner-bullet-screen {
  position: absolute;
  width: 346px;
  left: 24px;
  top: 200px;
  .winner {
    box-sizing: border-box;
    padding: 0 20px;
    width: 346px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 60px;
    margin-bottom: 4px;
	color: white;
  }
}
</style>
