<template>
	<section class="five-prizes" :class="useAnimation ? 'use-animation' : ''">
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
</template>

<script>
export default {
  props: {
    prizes: {
      type: Array,
      required: true,
    },
    useAnimation: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },

  
};
</script>

<style lang="less">
@import url("./util.less");
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
    .center-by-abs-margin(70px, 21px);
    font-size: 16px;
    color: #f9e1ff;
    text-shadow: 0px 0px 11.9975px rgba(255, 255, 255, 0.6), 0px 0px 23.9951px rgba(255, 255, 255, 0.25);
  }
  ul {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    .prize-item {
      .center-by-abs-margin(120px, 140px);

      &:nth-child(1) {
        transform: scale(1) translateY(-140px);
      }
      &:nth-child(2) {
        transform: scale(1) translate(120px, -20px);
      }
      &:nth-child(3) {
        transform: scale(1) translate(-80px, 140px);
      }
      &:nth-child(4) {
        transform: scale(1) translate(80px, 140px);
      }
      &:nth-child(5) {
        transform: scale(1) translate(-120px, -20px);
      }

      .pic {
        .el-fit-bgimg(120px, 120px, url("../../img/magic/prize-blue.png"));
        display: flex;
        justify-content: center;
        align-items: center;

        &.rare {
          .el-fit-bgimg(120px, 120px, url("../../img/magic/prize-gold.png"));
        }
        img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          object-position: center;
        }
      }
      .name {
        height: 20px;
        line-height: 20px;
        color: white;
        text-align: center;

        .text-overflow-ellipsis;
      }
    }
  }
  &.use-animation {
    .text {
      animation: textScale 1s ease @delay2 1 both;
      @keyframes textScale {
        from {
          opacity: 0;
          transform: scale(2);
        }
      }
    }
    ul {
      .prize-item {
        animation: moving 2s ease @delay1 1 both;
        transform-style: preserve-3d;
        @keyframes moving {
          from {
            opacity: 0;
            transform: scale(0) translate(0px, 0px);
          }
        }
        .pic {
          animation: cardRotate 1s ease-in-out @delay3 1 both;
          @keyframes cardRotate {
            from {
              transform: rotateY(-360deg);
            }
          }
          img {
            animation: oshow 0.5s ease-in-out @delay4 1 both;
          }
        }
        .name {
          animation: floatup 1s ease-in-out @delay4 1 both;
        }
      }
    }
  }
}
</style>
