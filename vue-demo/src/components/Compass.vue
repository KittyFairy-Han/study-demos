<template>
  <div class="base-compass">
    <transition-group tag="ul" name="compass" class="compass-container" :style="compassRotation">
      <li
        class="item-wrapper"
        v-for="(item, index) in list"
        :key="item.id"
        :style="[wrapStyle, getStyle(index)]"
        :class="`transition-type-${transitionType}`"
      >
        <div class="item-container" :style="[conStyle]" @click="handleClickedItem(item, index)">
          <!-- , {background:getColor()} -->

          <slot :itemData="getSrcData(item.id)"></slot>
        </div>

        <aside class="item-side left-side" :style="[sideStyle, leftSideStyle]">
          <slot name="left-side"></slot>
        </aside>

        <aside class="item-side right-side" :style="[sideStyle, rightSideStyle]">
          <slot name="right-side"></slot>
        </aside>
      </li>
    </transition-group>

    <div class="compass-pointer">
      <slot name="compass-pointer"></slot>
    </div>

    <svg key="clip-src">
      <clipPath :id="`clip-id-${clipPathKey}`" clipPathUnits="objectBoundingBox">
        <path
          :d="
            `M${clipPosition.bx} 1
          L${0} ${clipPosition.ty}
          Q0.5 ${clipPosition.tc}, ${1} ${clipPosition.ty}
          L${1 - clipPosition.bx} 1
          Q0.5 ${clipPosition.bc},${clipPosition.bx} 1
          Z`
          "
        />
      </clipPath>
    </svg>
  </div>
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
    //作为转盘每个块的唯一标识的属性

    itemKey: {
      type: String,
      default: "id",
    },

    clipPathKey: {
      type: String,
      default: "",
      required: true,
    },

    srcData: {
      type: Array,
      required: true,
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
      default: 500,
    },

    transitionType: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      allData: [],
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

    conStyle() {
      return {
        clipPath: `url(#clip-id-${this.clipPathKey})`,
      };
    },

    clipPosition() {
      const { c, s, t, k } = this.usefulValues;

      return {
        tx: fx5((t - s) / (2 * t)),
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
      };
    },

    leftSideStyle() {
      return {
        transform: `rotate(${-this.itemDeg / 2}deg)`,
      };
    },

    rightSideStyle() {
      return {
        transform: `rotate(${this.itemDeg / 2}deg)`,
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
    srcData: {
      immediate: true,

      handler(v) {
        this.allData = v.map((itemData) => {
          return { id: itemData[this.itemKey] };
        });

        this.list = this.allData.slice(0, this.segNum);
        this.curId = "";
        this.curRotateDeg = 0;
      },
    },
  },

  methods: {
    getStyle(i) {
      const θ = this.itemDeg;

      return {
        transform: `rotateZ(${i * θ}deg)  `,
      };
    },

    getSrcData(id) {
      return this.srcData.find((item) => item[this.itemKey] === id);
    },

    handleClickedItem(item, newIndex) {
      const allLen = this.allData.length;
      const segNum = this.segNum;

      if (allLen <= segNum) {
        this.rotateAnimate(newIndex);
      }

      if (allLen > segNum) {
        const start = this.allData.indexOf(item);
        const end = start + segNum;
        this.animateNewList(start, end);
      }

      this.curId = item.id;
      this.$emit("itemClicked");
    },

    rotateAnimate(newIndex) {
      let lastIndex = this.list.findIndex((item) => item.id === this.curId);

      if (lastIndex == -1) {
        lastIndex = 0; //初始化没有选择某一个片段的时候相当于index=0
      }

      const roDeg = (newIndex - lastIndex) * this.itemDeg; //旋转差值

      // console.log(roDeg)

      if (Math.abs(roDeg) < 180) {
        this.curRotateDeg -= roDeg;
      } else if (roDeg >= 180) {
        this.curRotateDeg += 360 - roDeg; //就近旋转
      } else {
        this.curRotateDeg -= 360 + roDeg;
      }
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
.base-compass {
  //以父元素的width作为边长形成的正方形

  padding: 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  overflow: hidden;
  svg {
    z-index: -1;
  }

  ul.compass-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    li {
      position: absolute;
      top: 0;
      transform-origin: 50% 100%;
      overflow: hidden;

      .item-container {
        width: 100%;
        height: 100%;
      }

      .item-side {
        position: absolute;
        transform-origin: 50% 0;
        width: 0;
        z-index: 2;
        &.left-side {
          left: 0;
        }

        &.right-side {
          right: 0;
        }
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

  .compass-pointer {
    position: absolute;

    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
  }
}
</style>
