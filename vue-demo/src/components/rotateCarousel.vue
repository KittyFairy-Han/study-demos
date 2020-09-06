<template>
  <section class="rotate-carousel">
    <transition-group name="list" tag="ul" class="rotate-carousel-origin">
      <li
        class="dot"
        v-for="(dot, index) in shapePoints"
        :key="dot.id"
        :style="_styleObj(dot, index)"
        @click="jumpto(index)"
      >
        <slot :itemData="dot"></slot>
      </li>

      <li class="center-dot" :style="centerStyleObj" key="center-one">
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

const m2 = (x) => Math.pow(x, 2);

export default {
  props: {
    list: {
      default: [],
      type: Array,
    },

    itemNum: {
      default: 0,
      type: Number,
    },

    itemw: {
      default: 0,
      type: Number,
    },

    itemh: {
      default: 0,
      type: Number,
    },

    marginx: {
      default: 0,
      type: Number,
    },

    offesetx: {
      default: 0,
      type: Number,
    },

    yAixLength: {
      default: 0,
      type: Number,
    },

    isFixedCenter: {
      default: true,
      type: Boolean,
    },

    fixedCenterw: {
      default: 0,
      type: Number,
    },
  },

  data() {
    return {
      shapePoints: [],
    };
  },

  computed: {
    xAixLength() {
      let xAixLength;

      if (this.isFixedCenter) {
        xAixLength =
          (this.marginx + this.itemw) * this.itemNum + this.fixedCenterw;
      } else {
        xAixLength = (this.marginx + this.itemw) * this.itemNum - this.marginx;
      }

      return xAixLength / 2;
    },

    centerStyleObj() {
      const x = 0 - this.fixedCenterw / 2;

      const y = -(this.yAixLength + this.fixedCenterw / 2);

      return {
        width: `${this.fixedCenterw}px`,
        height: `${this.fixedCenterw}px`,
        left: `${x}px`,
        bottom: `${y}px`,
      };
    },
  },

  created() {},

  mounted() {},

  methods: {
    showPre() {
      let position = this.list.indexOf(this.shapePoints[0]);

      if (position === 0) {
        position = this.list.length;
      }

      this.shapePoints.unshift(this.list[position - 1]);

      this.shapePoints.pop();
    },

    showNext() {
      let position = this.list.indexOf(this.shapePoints[this.itemNum - 1]);

      if (position === this.list.length - 1) {
        position = -1;
      }

      this.shapePoints.push(this.list[position + 1]);

      this.shapePoints.shift();
    },

    jumpto(clickedIndex) {
      const middleIndex = this.itemNum / 2;

      const leftCenter = middleIndex - 1;

      const rightCenter = middleIndex + 1;

      if (clickedIndex < middleIndex) {
        let n = leftCenter - clickedIndex;

        while (n > 0) {
          this.showPre();

          n--;
        }
      } else {
        let n = clickedIndex - rightCenter;

        while (n >= 0) {
          this.showNext();

          n--;
        }
      }
    },

    _styleObj(dot, index) {
      const a = this.xAixLength;

      const b = this.yAixLength;

      const r2 = Math.sqrt;

      let suStyle = {};

      const comStyle = { width: `${this.itemw}px`, height: `${this.itemw}px` };

      if (index < this.itemNum / 2) {
        const x = -a + index * (this.marginx + this.itemw + this.offesetx);

        const y = -r2(m2(b) * (1 - m2(x) / m2(a)));

        suStyle = {
          left: `${x - this.itemw / 2}px`,
          bottom: `${y - this.itemh / 2}px`,
        };
      } else if (index >= this.itemNum / 2) {
        const x =
          -a +
          (this.itemNum - 1 - index) *
            (this.marginx + this.itemw + this.offesetx);

        const y = -r2(m2(b) * (1 - m2(x) / m2(a)));

        suStyle = {
          right: `${x - this.itemw / 2}px`,
          bottom: `${y - this.itemh / 2}px`,
        };
      }

      return Object.assign(comStyle, suStyle);
    },
  },

  watch: {
    list: {
      immediate: true,

      handler(newValue, oldValue) {
        const sps = newValue.slice(0, this.itemNum);

        this.shapePoints = sps;
      },
    },
  },
};
</script>

<style lang="less">
html,
body,
.app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.app {
  position: relative;
}

.rotate-carousel-origin {
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: black;
}

.dot {
  display: block;
  position: absolute;
}

.center-dot {
  position: absolute;
}

.btn-pre,
.btn-next {
  cursor: pointer;
  position: absolute;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0; // transform: translateY(-100px);
}

.list-move {
  transition: all 1s;
}
</style>
