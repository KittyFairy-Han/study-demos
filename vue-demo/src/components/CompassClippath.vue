<template>
  <transition-group
    tag="ul"
    name="compass"
    class="camera-type-selector-container"
    :style="compassRotation"
  >
    <li
      class="item-wrapper"
      v-for="(item, index) in list"
      :key="item.id"
      :style="[wrapStyle, getStyle(index,item)]"
      @click="handleClickedItem(item,index)"
      :class="`transition-type-${transitionType}`"
    >
      <aside class="item-side" :style="sideStyle">
        <slot name="item-side"></slot>
      </aside>
      <slot :itemData="item"></slot>
    </li>
    <svg key="clip-src">
      <clipPath id="myPath" clipPathUnits="objectBoundingBox">
        <path
          :d="
            `M${clipPosition.bx} 1
          L0 ${clipPosition.ty}
          Q0.5 ${clipPosition.tc}, ${1} ${clipPosition.ty}
          L${1-clipPosition.bx} 1
          Q0.5 ${clipPosition.bc},${clipPosition.bx} 1
          Z`
          "
        />
      </clipPath>
    </svg>
  </transition-group>
</template>

<script>
const fx5 = (v) => {
  return Number(v.toFixed(5));
};
function fx200(v) {
  return Number((v * 100).toFixed(2)) + "%";
}
export default {
  props: {
    allData: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.length !== 1;
      },
    },
    segNum: {
      type: Number,
      default: 2,
      validator: (value) => {
        return value > 1;
      },
    },
    rRatio: {
      type: Number,
      default: 0,
      validator: (value) => {
        return value < 1;
      },
    },
    rotateDuration: {
      type: Number,
      default: 1000,
    },
    transitionType: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      curIndex: 0, //当前选中的item在allData中的位置
      list: [], //转盘数据
      curRotateDeg: 0, //转盘当前旋转角度
      curId: "", //当前选中的item的id
    };
  },

  computed: {
    usefulValues() {
      const a = (Math.PI * 2) / this.segNum;
      return {
        a,
        c: Math.cos(a / 2),
        s: Math.sin(a / 2),
        t: Math.tan(a / 2),
        k: this.rRatio,
      };
    },

    itemDeg() {
      return 360.0 / this.segNum;
    },

    wrapStyle() {
      const { c, s, t, k } = this.usefulValues;
      return {
        width: fx200(s),
        height: fx200((1 - k * c) / 2),
        left: fx200((1 - s) / 2),
        transformOrigin: `50% ${fx200(1 + (k * c) / (1 - k * c))}`,
        transition: `all ${this.rotateDuration}ms`,
      };
    },
    clipPosition() {
      const { c, s, t, k } = this.usefulValues;
      return {
        ty: fx5((1 - c) / (1 - k * c)),
        bx: fx5((1 - k) / 2),
        bc: fx5((1 - 2 * k + k * c) / (1 - k * c)),
        tc: -fx5((1 - c) / (1 - k * c)),
      };
    },
    sideStyle() {
      const { c, s, t, k } = this.usefulValues;
      return {
        height: fx200((1 - k) / (1 - k * c)),
        top: fx200((1 - c) / (1 - k * c)),
        transform: `rotate(${-this.itemDeg / 2}deg)`,
      };
    },

    compassRotation() {
      return {
        transform: `rotate(${this.curRotateDeg}deg)`,
        transition: `transform ${this.rotateDuration}ms`,
      };
    },
  },

  watch: {
    allData: {
      immediate: true,
      handler(v) {
        this.list = v.slice(0, this.segNum);
      },
    },
  },

  methods: {
    getStyle(i, item) {
      const θ = this.itemDeg;
      console.log(i, θ, item.text, {
        transform: `rotateZ(${i * θ}deg)`,
      });
      return {
        transform: `rotateZ(${i * θ}deg)`,
      };
    },

    handleClickedItem(item, i) {
      const allLen = this.allData.length;
      const segNum = this.segNum;
      if (allLen > segNum) {
        const start = this.allData.indexOf(item);
        const end = start + segNum;
        this.animateNewList(start, end);
      } else {
        this.curRotateDeg = -this.itemDeg * i;
      }

      this.curId = item.id;
    },
    animateNewList(start, end) {
      const newList = [...this.allData, ...this.allData].slice(start, end);
      if (this.transitionType > 1) {
        this.list = [];
        this.$nextTick(() => {
          this.list = newList;
        });
      } else {
        this.list = newList;
      }
    },
  },
};
</script>

<style lang="less">
@time: 1s;
ul {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
  li {
    position: absolute;
    top: 0;
    transform-origin: 50% 100%;
    clip-path: url(#myPath);
    overflow: hidden;

    .item-side {
      position: absolute;
      transform-origin: 50% 0;
      width: 2%;
      left: -1%;
    }
  }
  li.transition-type-1 {
    &.compass-leave-to {
      opacity: 0;
    }
    &.compass-enter {
      opacity: 0;
    }
  }
  li.transition-type-2 {
    &.compass-leave-to {
      opacity: 0;
      transform: rotateZ(0) !important;
    }
    &.compass-enter {
      opacity: 0;
      transform: rotateZ(0) !important;
    }
  }
  li.transition-type-3 {
    &.compass-leave-to {
      transform: rotateZ(0) !important;
    }
    &.compass-enter {
      transform: rotateZ(0) !important;
    }
  }
  li.transition-type-4 {
    &.compass-leave-to {
      opacity: 0;
    }
    &.compass-enter {
      opacity: 0;
    }
  }
}
</style>
