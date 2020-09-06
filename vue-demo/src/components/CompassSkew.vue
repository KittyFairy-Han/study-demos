<template>
  <section class="bottom-controller">
    <div class="camera-type-selector">
      <ul class="compass-container" :style="listStyle">
        <li
          class="item-wrapper"
          v-for="(item, index) in list"
          :key="item.id"
          :style="[wrapStyle,getStyle(index)]"
        >
          <div class="item-container" :style="conStyle" @click="handleClickedItem">
            {{ item.text }}
            <slot :itemData="item"></slot>
          </div>
        </li>
      </ul>
    </div>
    <div class="area-selector"></div>
    <div class="sence-selector"></div>
  </section>
</template>

<script>
// import { getColor } from "../../common/utils"
function getColor(opacity) {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  const a = Math.random();
  return `rgba(${r},${g},${b},${opacity ? opacity : a})`;
}

function msin(v) {
  return Math.sin(v);
}

function mcos(v) {
  return Math.cos(v);
}

export default {
  data() {
    return {
      k: 1 / 3,
      list: [
        {
          id: 1,

          text: "卡口点位",
        },

        {
          id: 2,

          text: "人脸点位",
        },

        {
          id: 3,

          text: "高空点位",
        },

        {
          id: 4,

          text: "视频点位",
        },

        {
          id: 5,

          text: "休息休息",
        },

        {
          id: 6,

          text: "yyyy",
        },

        {
          id: 7,

          text: "oooo",
        },

        {
          id: 8,

          text: "kkkk",
        },

        {
          id: 9,

          text: "yyyy",
        },

        {
          id: 10,

          text: "oooo",
        },

        {
          id: 11,

          text: "kkkk",
        },
        {
          id: 12,

          text: "kkkk",
        },
      ],
    };
  },

  computed: {
    listStyle() {
      return {
        width: 2 * this.outerR,
        height: 2 * this.outerR,
      };
    },

    /* 弧度制的值 */
    itemArc() {
      return (Math.PI * 2) / this.list.length;
    },
    /* 角度值的值 */
    itemDeg() {
      return 360 / this.list.length;
    },
    /* 环段区域的高度占大圆形半径的比值 */
    conHeiK() {
      return 1 - this.k;
    },
    /* 环段区域尺寸及位置*/
    conStyle() {
      const θ = this.itemArc;
      const α = this.itemDeg;
      const k = this.conHeiK;
      const f = this.format;
      let conWidth = f(2 * msin(θ / 2));
      const conHeight = f((1 / msin(θ)) * k);
      const moveY = f(1 - 1 / k + mcos(θ / 2) / k);
      return {
        width: conWidth + "%",
        height: conHeight + "%",
        transform: `skew(-${90 - α}deg) rotate(-${
          90 - α / 2
        }deg) translateY(${moveY}%)`,
      };
    },

    /* 扇形的尺寸和定位 */
    wrapStyle() {
      const wrapHeight = this.format(msin(this.itemArc) / 2) + "%";
      const wrapTop = 50 - parseInt(wrapHeight) + "%";
      return { width: "50%", height: wrapHeight, top: wrapTop, left: 0 };
    },
  },

  methods: {
    format(v) {
      return (v * 100).toFixed(2);
    },

    getStyle(i) {
      const { width, height, left, top } = this.wrapStyle;
      const θ = this.itemDeg;
      return {
        transform: `rotateZ(${i * θ}deg)  skew(${90 - θ}deg)`, //rotate 要在 skew 前面
        backgroundColor: getColor(1),
      };
    },

    handleClickedItem(e) {
      console.log(e.target);
    },
  },
};
</script>

<style lang="less">
.bottom-controller {
  position: fixed;
  left: 10%;
  top: 10%;
  .camera-type-selector {
    width: 5rem;
    height: 5rem;
    .compass-container {
      position: relative;
      background-color: black;
      overflow: hidden;
      border-radius: 50%;
      width: 600px;
      height: 600px;
      .item-wrapper {
        position: absolute;
        top: 0;
        transform-origin: 100% 100%;
        font-size: 0.14rem;
        background-image: url("");
        border-bottom: 1px solid white;
        overflow: hidden;
        .item-container {
          position: absolute;
          left: 0;
          bottom: 0;
          transform-origin: 0% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.466);
        }
      }
    }
  }
}
</style>
