<template>
  <section class="rotate-carousel">
    <transition-group name="list" tag="ul" class="rotate-carousel-origin">
      <li
        class="dot"
        v-for="(dot, index) in shapePoints"
        :key="dot.id"
        :style="_styleObj(dot, index)"
      >
        <slot :itemData="dot"></slot>
      </li>

      <li v-if="fixedCenterSize" class="center-dot" :style="centerStyleObj" key="center-one">
        <slot name="centerEle"></slot>
      </li>
    </transition-group>

    <div @click="showPre">
      <slot name="preBtn"></slot>
    </div>

    <div @click="showNext">
      <slot name="nextBtn"></slot>
    </div>
  </section>
</template>

<script>
function sin(th) {
  return Math.sin(th);
}

function cos(th) {
  return Math.cos(th);
}

function randomN() {
  return Math.floor(10 * Math.random());
}

function to360(radius) {
  return (radius / Math.PI) * 180;
}

export default {
  props: {
    /* 用于轮播的列表 */

    list: {
      default: ()=>{
        return []
      },
      type: Array,
    } /* 是否循环轮播 */,

    isLoop: {
      default: true,
      type: Boolean,
    } /* 显示出来多少个 */,

    itemNum: {
      default: 3,
      type: Number,
    } /* 每个[width,height] 单位是像素*/,

    itemSize: {
      default: () => [],
      type: Array,
      required: true,
    } /* 总体区块[width,height] 单位是像素*/,

    totalSize: {
      default: () => [],
      type: Array,
      required: true,
    } /* 中间的元素是否固定 */,

    fixedCenterSize: {
      default: () => null,
      type: Array,
    },
  },

  data() {
    return {
      shapePoints: [],
    };
  },

  computed: {
    centerStyleObj() {
      const [w, h] = this.fixedCenterSize;
      const y = this.totalSize[1];
      return {
        width: `${w}px`,
        height: `${h}px`,
        marginLeft: `${-w / 2}px`,
        marginTop: `${-h / 2}px`,
        left: 0,
        top: `${y}px`,
      };
    },

    commonStyle() {
      const [w, h] = this.itemSize;

      return {
        width: `${w}px`,
        height: `${w}px`,
        marginLeft: `${-w / 2}px`,
        marginTop: `${-w / 2}px`,
      };
    },

    distributeR() {
      const b = this.totalSize[0] / 2;
      const a = this.totalSize[1];
      return (b * b + a * a) / (2 * a);
    } /* 分布的角度（一半） */,

    distributeAngle() {
      const b = this.totalSize[0] / 2;
      const a = this.distributeR - this.totalSize[1]; // console.log(b,a,to360(Math.atan(b / a)))
      return Math.atan(b / a);
    },

    startAngle() {
      return -Math.PI / 2 - this.distributeAngle;
    },

    extraAngle() {
      if (this.fixedCenterSize) {
        const w = this.fixedCenterSize[0] - this.itemSize[0];
        const r = this.distributeR;
        return Math.asin(w / 2 / r);
      } else {
        return 0;
      }
    },

    gapAngle() {
      const b = this.totalSize[0] / 2;
      const a = this.distributeR - this.totalSize[1];
      const gapNum = parseInt(this.itemNum / 2);
      const gapA = (this.distributeAngle - this.extraAngle) / gapNum;
      return gapA;
    },
  },

  created() {},

  mounted() {},

  methods: {
    showPre() {
      let position = this.list.indexOf(this.shapePoints[0]);
      if (position === 0) {
        this.$emit("atStartDot");
        if (!this.isLoop) {
          return;
        }
        position = this.list.length;
      }
      console.log(position);
      this.shapePoints.unshift(this.list[position - 1]);
      this.shapePoints.pop();
    },

    showNext() {
      let position = this.list.indexOf(this.shapePoints[this.itemNum - 1]);
      if (position === this.list.length - 1) {
        this.$emit("atEndDot");
        if (!this.isLoop) {
          return;
        }
        position = 0;
      }
      this.shapePoints.push(this.list[position + 1]);
      this.shapePoints.shift();
    },

    _styleObj(dot, index) {
      const {
        startAngle: sA,
        gapAngle: gA,
        distributeR: r,
        extraAngle: eA,
      } = this;

      let angle = sA + index * gA;
      if (this.fixedCenterSize && index >= this.itemNum / 2) {
        angle += gA + 2 * eA;
      } // console.log(to360(angle))

      const y = r * sin(angle);
      const x = r * cos(angle);
      const left = `${parseInt(x)}px`;
      const top = `${parseInt(-y - (r - this.totalSize[1]))}px`;
      const positionStyle = { left, top };

      return Object.assign({}, this.commonStyle, positionStyle);
    },
  },

  watch: {
    list:{
      immediate:true,
      handler(newValue, oldValue) {
        const sps = newValue.slice(0, this.itemNum);
        this.shapePoints = sps;
      },
    }
  },
};
</script>

 

<style lang="less">
.rotate-carousel-origin  {
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: black;
}

  .dot  {
  display: block;
  position: absolute;
}

  .center-dot  {
  position: absolute;
}

  .btn-pre,
.btn-next  {
  cursor: pointer;
  position: absolute;
}

  .list-enter-active,
.list-leave-active  {
  transition: all 1s;
}

.list-enter,
.list-leave-to  {
  opacity: 0;
}

.list-move  {
  transition: all 1s;
}
</style>

 

 