<template>
  <main class="magic-castle-result-page">
    <section class="prizes-result">
			<five v-if="showPrizes" :prizes="prizes"></five>
		</section>

		<footer>
			<div class="btn-group">
				<button class="share" :class="true?'normal':'disabled'" @click="toShare">炫耀一下</button>
				<button class="again" @click="again">再来一次</button>
			</div>

			<!-- <div class="footer-text">
				奖品可前往<router-link
					class="to-warehouse"
					to="/magicCastle/store"
					replace
					>仓库</router-link
				>选择领取
			</div> -->
			<div class="footer-text">
				前往<span class="to-warehouse" @click="toStore">仓库</span>领取
			</div>
		</footer>

		<share-preview v-if="showPreview" :nickName="'userInfo.nickName'"  :prizes="prizes"></share-preview>

  </main>
</template>

<script>
import { queryPrizes } from "../modules/poster-share-demo/util";
import Five from "../modules/poster-share-demo/Five.vue";
import SharePreview from '../modules/poster-share-demo/SharePreview.vue';
export default {
  components: { Five, SharePreview },
  data() {
    return {
      prizes: [], //获得的奖品（奖品结果）
      showPrizes: false,
      showPreview: false,
    };
  },
  computed: {},
  created() {
    this.getlotteryResult();
  },
  mounted() {},
  methods: {
    // 获取抽奖结果
    async getlotteryResult() {
      this.prizes = await queryPrizes();
      setTimeout(() => {
        this.showPrizes = true;
      }, 3500); //等待动画播完
    },

    // 再来一次
    again() {
      window.location.reload();
    },

    // 分享
    toShare() {
      this.showPreview = true;
    },

    //仓库
    toStore() {
      alert("敬请期待");
    },
  },
};
</script>

<style lang="less" scoped>
@baseurl: "../modules/poster-share-demo";
@import url("@{baseurl}/util.less");

.magic-castle-result-page {
  background-image: url("@{baseurl}/images/page-bg.png");
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .prizes-result {
    .el-fit-bgimg(750px, 750px, url("@{baseurl}/images/pentacle.png"));
    display: flex;
    justify-content: center;
    align-items: center;
    height: 750px;
    animation: playingMagic 3.5s ease-in 0s 1 both;
    @keyframes playingMagic {
      to {
        transform: rotateZ(720deg);
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn-group {
      padding: 0 60px;
      display: flex;
      justify-content: space-around;
      margin-bottom: 36px;
      button {
        color: white;
        font-size: 34px;
        font-weight: 400;
        padding-bottom: 25px;
      }
      .share {
        .el-fit-bgimg(240px, 106px, url("@{baseurl}/images/btn-share.png"));
        &.disabled {
          opacity: 0.6;
          pointer-events: none;
        }
      }
      .again {
        .el-fit-bgimg(240px, 106px, url("@{baseurl}/images/btn-again.png"));
      }
    }
    .footer-text {
      text-align: center;
      color: white;
      width: 551px;
      height: 64px;
      line-height: 64px;
      border: 1px solid #ffffff;
      border-radius: 8px;
      font-size: 26px;
      .to-warehouse {
        color: #80eaff;
        padding: 0 10px;
        // .v-center();
      }
    }
  }
}
</style>
