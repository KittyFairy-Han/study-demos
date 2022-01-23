<template>
  <main class="magic-castle-result-page">
    <section class="prizes-result">
      <section v-if="showPrizes" class="five-prizes">
        <div class="text">幸运五连</div>
        <ul class="five-prizes-container">
          <!-- 奖品可能有重复，所以用index -->
          <li class="prize-item" v-for="(item, index) in prizes" :key="index">
            <div class="pic" :class="item.rare ? 'rare' : ''">
              <img :src="item.imgUrl" />
            </div>
            <div class="name">{{ item.name }}</div>
          </li>
        </ul>
      </section>
    </section>
    <footer>
      <div class="btn-group">
        <button class="share" @click="toShare">炫耀一下</button>
        <button class="again" @click="gotoGame">再来一次</button>
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
  </main>
</template>

<script>
import {queryPrizes} from "../modules/poster-share-demo/util"
export default {
  data() {
    return {
      prizes: [], //获得的奖品（奖品结果）
      curPrizesResult: "", //动态组件名
      showPrizes: false,
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
    gotoGame() {
      window.location.reload();
    },

    // 分享
    toShare() {
      alert("分享成功 √");
    },

    //仓库
    toStore() {
      alert("敬请期待");
    },
  },
};


</script>

<style lang="less" scoped>
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
  margin-left: -@w * 0.5;
  margin-top: -@h * 0.5;
  left: 50%;
  top: 50%;
}
.text-overflow-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.magic-castle-result-page {
  background-image: url("../img/magic/page-bg.jpg");
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .prizes-result {
    .el-fit-bgimg(750px, 750px, url("../img/magic/pentacle.png"));
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
    @delay1: 0s;
    @delay2: 0.5s;
    @delay3: 1s;
    @delay4: 2s;
    .five-prizes {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .text {
        .center-by-abs-margin(140px, 42px);
        font-size: 32px;
        color: #f9e1ff;
        text-shadow: 0px 0px 11.9975px rgba(255, 255, 255, 0.6), 0px 0px 23.9951px rgba(255, 255, 255, 0.25);
        animation: textScale 1s ease @delay2 1 both;
        @keyframes textScale {
          from {
            opacity: 0;
            transform: scale(2);
          }
        }
      }
      ul {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: visible;
        .prize-item {
          .center-by-abs-margin(240px, 280px);
          animation: moving 2s ease @delay1 1 both;
          transform-style: preserve-3d;
          @keyframes moving {
            from {
              opacity: 0;
              transform: scale(0) translate(0px, 0px);
            }
          }
          &:nth-child(1) {
            transform: scale(1) translateY(-280px);
          }
          &:nth-child(2) {
            transform: scale(1) translate(240px, -40px);
          }
          &:nth-child(3) {
            transform: scale(1) translate(-160px, 280px);
          }
          &:nth-child(4) {
            transform: scale(1) translate(160px, 280px);
          }
          &:nth-child(5) {
            transform: scale(1) translate(-240px, -40px);
          }

          .pic {
            .el-fit-bgimg(240px, 240px, url("../img/magic/prize-blue.png"));
            display: flex;
            justify-content: center;
            align-items: center;

            animation: cardRotate 1s ease-in-out @delay3 1 both;
            @keyframes cardRotate {
              from {
                transform: rotateY(-360deg);
              }
            }
            &.rare {
              .el-fit-bgimg(240px, 240px, url("../img/magic/prize-gold.png"));
            }
            img {
              @keyframes oshow {
                from {
                  opacity: 0;
                }
              }
              width: 160px;
              height: 160px;
              object-fit: contain;
              object-position: center;
              animation: oshow 0.5s ease-in-out @delay4 1 both;
            }
          }
          .name {
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
            height: 40px;
            line-height: 40px;
            color: white;
            text-align: center;
            animation: floatup 1s ease-in-out @delay4 1 both;
            .text-overflow-ellipsis;
          }
        }
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
        background-color: transparent;
        border: none;
      }
      .share {
        .el-fit-bgimg(240px, 106px, url("../img/magic/btn-share.png"));
      }
      .again {
        .el-fit-bgimg(240px, 106px, url("../img/magic/btn-again.png"));
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
