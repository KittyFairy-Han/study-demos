<!--
 * @Author: 鱼小柔
 * @Date: 2020-03-21 11:44:36
 * @LastEditors: your name
 * @LastEditTime: 2020-09-06 22:37:54
 * @Description: file content
 -->
 
<template>
  <main class="three-demo" ref="rdrWrapper">
    <canvas id="rederer-dom" ref="rdrDom"></canvas>
  </main>
</template>

<script src="https://wow.techbrood.com/libs/three.r73.js"></script>

<script>
import BaseThree from "../components/BasicThree";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { GeometryUtils } from "three/examples/jsm/utils/GeometryUtils.js";
import { randomRangeInt } from "../common/utils";

export default {
  mixins: [BaseThree],

  created() {},

  mounted() {
    this.init();
    this.initBroswerEvent();
    this.initR();
    // this.createPlaneGroup();
    // this.createCubeGroup()
    // this.createStaticBasicCircle();
    this.createText();
    this.createBottomLines();
    this.createGather();
    // this.drawUpArrow();
    // this.drawCapital();
    this.drawTopCircles();
    // this.drawCapitalBase();
  },

  data() {
    this.GREEN_LINE_COLOR = "#00ff77";

    this.WHITE_LINE_COLOR = "#ffffff";

    this.GREEN_LINE_WIDTH = 1;

    this.YELLOW_POINT_COLOR = "#ffff00";

    return {
      itemNum: 17,

      topR: 50,

      bottomR: 50
    };
  },

  methods: {
    initR() {
      this.topR = this.getR(48, 0, this.itemNum); // 圆台顶半径
      this.bottomR = this.getR(55, 0, this.itemNum); // 圆台底半径
    }, // 市局周围的白线圈

    drawTopCircles() {
      const lr = this.bottomR;

      const rs = [
        lr,
        0.22 * lr,
        0.22 * lr + 1,
        0.3 * lr,
        0.2 * lr,
        ,
        0.1 * lr + 1,
        0.1 * lr
      ]; // 线圈半径
      const dss = [1, 1, 0, 1, 0, 0, 1, 0]; // 线圈 dashsize 从最高到最低的
      const gss = [1, 1, 0, 1, 0, 0, 1, 0]; // 线圈间隔大小 从最高到最低的
      const py = [90, 80, 80, 50, 40, 30, 28, 20]; // 线圈在 y 轴位置 从最高到最低的
      const group = new THREE.Group();

      for (let i = 0; i < rs.length; i++) {
        const line = this.createCircleDashLine(
          rs[i],
          this.GREEN_LINE_WIDTH,
          dss[i],
          gss[i],
          this.WHITE_LINE_COLOR
        );

        line.position.set(0, py[i], 0);

        group.add(line);
      }

      this.scene.add(group);
    }, // 市局球

    drawCapital() {
      const w = this.topR * 0.7;

      const spriteMap = this.textureLoader.load(
        `textures/three-js-demo/capital.png`
      );

      const spriteMaterial = new THREE.SpriteMaterial({
        map: spriteMap,
        depthTest: false
      });

      const sprite = new THREE.Sprite(spriteMaterial);

      sprite.position.set(0, 120, -5);

      sprite.scale.set(w, w, 1);

      this.scene.add(sprite);
    }, // 市局底面

    drawCapitalBase() {
      const r = this.topR * 0.23;

      const h = 80;

      const geometry = new THREE.CircleBufferGeometry(r, 100);

      const texture = this.textureLoader.load(
        `textures/three-js-demo/capital-bottom.png`
      );

      const material = new THREE.MeshBasicMaterial({
        map: texture,

        transparent: true
      });

      const circle = new THREE.Mesh(geometry, material);

      circle.position.set(0, h, 0);

      circle.rotateOnAxis(this.XAV, -Math.PI / 2);

      this.scene.add(circle);
    }, // 上部分箭头

    drawUpArrow() {
      const r = this.topR * 0.5;

      const spriteMap = this.textureLoader.load(
        `textures/three-js-demo/up-arrow.png`
      );

      const spriteMaterial = new THREE.SpriteMaterial({
        map: spriteMap,
        depthTest: false
      });

      const sprite = new THREE.Sprite(spriteMaterial);

      sprite.position.set(0, 20, -5);

      sprite.scale.set(r, r, 1);

      this.scene.add(sprite);
    }, // 汇聚线

    createGather() {
      const lineN = 50; // 线的个数
      const tps = this.getPosition(this.topR * 0.15, lineN); // 汇聚终点坐标(x,z)
      const bps = this.getPosition(this.topR * 0.9, lineN); // 汇聚起点坐标(x,z)
      const endY = 70; //聚终点y轴坐标
      const startY = 10; //起点y轴坐标
      const group = new THREE.Group();

      for (let i = 0; i < lineN; i++) {
        const start = bps[i];

        const end = tps[randomRangeInt(0, lineN)];

        const c1 = [
          ((start[0] + end[0]) * 4) / 5,
          ((startY + endY) * 3) / 5,
          ((start[1] + end[1]) * 4) / 5
        ];

        const c2 = [
          ((start[0] + end[0]) * 1) / 5,
          ((startY + endY) * 2) / 5,
          ((start[1] + end[1]) * 1) / 5
        ];

        const curve = new THREE.CubicBezierCurve3(
          new THREE.Vector3(start[0], startY, start[1]),
          new THREE.Vector3(...c1),
          new THREE.Vector3(...c2),
          new THREE.Vector3(end[0], endY, end[1])
        );

        const points = curve.getPoints(endY - startY);

        const line = this.createRunningLight(points);

        const point = this.createRunningPoint();

        point.position.set(start[0], startY, start[1]);

        this.setPointAnimation(point, points);

        line.add(point);

        group.add(line);
      }

      this.scene.add(group);
    },

    createRunningLight(points) {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineDashedMaterial({
        color: this.GREEN_LINE_COLOR,
        linewidth: 1.5,
        dashSize: 1,
        gapSize: 0.1
      });

      const line = new THREE.Line(geometry, material);

      line.computeLineDistances();

      return line;
    }, //汇聚线上的点

    createRunningPoint() {
      const geometry = new THREE.SphereBufferGeometry(0.8);

      const material = new THREE.MeshBasicMaterial({
        color: this.YELLOW_POINT_COLOR
      });

      const sphere = new THREE.Mesh(geometry, material);

      return sphere;
    }, // 汇聚线上的点的动画

    setPointAnimation(point, xyzs) {
      const timeSlice = xyzs.map((item, index) => index);

      const flatxyz = xyzs.reduce((acc, item, i) => {
        return acc.concat(item.x, item.y, item.z);
      }, []);

      const positionKF = new THREE.VectorKeyframeTrack(
        ".position",
        timeSlice,
        flatxyz
      );

      

      const animation = new THREE.AnimationClip("Action", 5, [positionKF]);

      const mixer = new THREE.AnimationMixer(point);

      this.mixers.push(mixer);

      const clipAction = mixer.clipAction(animation);
      
      clipAction.play();
    }, //中间部分静态底座

    createStaticBasicCircle() {
      const group = new THREE.Group();

      const sr = this.topR;

      const lr = this.bottomR;

      const rArr = [lr + 1, 0.6 * sr, sr + (lr - sr) / 2, sr, sr - 1]; // 静态底座半径
      const yArr = [0, 0.1, 10, 20, 19];

      for (let i = 0; i < rArr.length; i++) {
        const geometry = new THREE.CircleBufferGeometry(rArr[i], 100);

        const texture = this.textureLoader.load(
          `textures/three-js-demo/base${i}.png`
        );

        const material = new THREE.MeshBasicMaterial({
          map: texture,

          transparent: true
        });

        const circle = new THREE.Mesh(geometry, material);

        circle.position.set(0, yArr[i], 0);

        circle.rotateOnAxis(this.XAV, -Math.PI / 2);

        group.add(circle);
      }

      this.scene.add(group);
    }, // 中间区域的弧形平面

    createPlaneGroup() {
      const num = this.itemNum; // 分割数量
      const h = 23; // 圆台高
      const group = new THREE.Group();

      for (let i = 0; i < num; i++) {
        const itemA = (2 * Math.PI) / num;

        const geometry = new THREE.CylinderBufferGeometry(
          this.topR,
          this.bottomR,
          h,
          num,
          1,
          true,
          itemA * i,
          itemA
        );

        const texture = this.textureLoader.load(
          `textures/three-js-demo/arc-surface.png`
        );

        const material = new THREE.MeshBasicMaterial({
          map: texture,

          transparent: true
        });

        const cylinder = new THREE.Mesh(geometry, material);

        group.add(cylinder);
      }

      group.position.set(0, h / 2, 0);

      this.scene.add(group);
    }, // 中间部分区域部分(两个正方体)

    createCubeGroup() {
      const lr = this.bottomR;

      const position = this.getPosition(0.8 * lr, this.itemNum, -Math.PI / 7);

      const group = new THREE.Group();

      for (let i = 0; i < this.itemNum; i++) {
        const spriteMap = this.textureLoader.load(
          `textures/three-js-demo/cube.png`
        );

        const spriteMaterial = new THREE.SpriteMaterial({
          map: spriteMap,
          depthTest: false
        });

        const sprite = new THREE.Sprite(spriteMaterial);

        sprite.position.set(position[i][0], 10, position[i][1]);

        sprite.scale.set(26, 26, 1);

        group.add(sprite);
      }

      this.scene.add(group);
    }, // 中间部分文字

    createText() {
      this.fontLoader.load(
        this.fontUrl,

        font => {
          const num = this.itemNum;

          const h = 13; //分布在 y 轴的高度
          const iA2 = Math.PI / 2.3; // 与弧形片平行 沿着y轴自转初始角度
          const iA3 = -Math.PI / 18; // 与弧形片平行 沿着x轴自转角度
          const rA = Math.PI / 180; // 与弧形片左右对齐 group 需要自转的角度
          const group = new THREE.Group();

          const sr = this.topR;

          const position = this.getPosition(
            this.bottomR + 0.1,
            num,
            Math.PI / 10
          );

          for (let i = 0; i < num; i++) {
            const itemA = (2 * Math.PI) / num;

            const matLite = new THREE.MeshBasicMaterial({
              color: new THREE.Color(0xffffff)
            });

            const geometry = new THREE.TextGeometry(`${i < 10 ? "0" + i : i}`, {
              font: font,

              size: 7,

              height: 1,

              curveSegments: 10
            });

            const labelName = new THREE.Mesh(geometry, matLite);

            labelName.position.set(position[i][0], h, position[i][1]);

            labelName.rotateOnAxis(this.YAV, iA2 - i * itemA);

            labelName.rotateOnAxis(this.XAV, iA3);

            group.add(labelName); // group.rotateOnAxis(this.YAV, rA)
          }

          this.scene.add(group);
        },

        function(xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },

        function(err) {
          console.log("An error happened");
        }
      );
    }, // 下面部分虚线圈

    createBottomLines() {
      const lr = this.bottomR;

      const rs = [lr, 1.2 * lr, 1.2 * lr + 3, 1.5 * lr, 1.5 * lr + 3]; // 线圈半径
      const dss = [6, 1, 1, 0, 2]; // 线圈 dashsize 从最高到最低的
      const gss = [4, 1, 3, 0, 2]; // 线圈间隔大小 从最高到最低的
      const py = [-20, -20, -20, -30, -30]; // 线圈在 y 轴位置 从最高到最低的
      const group = new THREE.Group();

      for (let i = 0; i < rs.length; i++) {
        const line = this.createCircleDashLine(
          rs[i],
          this.GREEN_LINE_WIDTH,
          dss[i],
          gss[i],
          this.GREEN_LINE_COLOR
        );

        line.position.set(0, py[i], 0);

        group.add(line);
      }

      this.scene.add(group);
    } /**

     * @description:创建圆线

     * @param {number} 线圈半径

     * @param {number} 线宽

     * @param {number} 线的长度

     * @param {number} 间隙长度

     * @return:

     */,

    createCircleDashLine(
      r = 10,
      w = this.GREEN_LINE_WIDTH,
      ds = 1,
      gs = 1,
      color = this.GREEN_LINE_COLOR
    ) {
      const points = this.getPosition(r, 100, 0);

      const vertexes = points.reduce((acc, item) => {
        return acc.concat([item[0], 0, item[1]]);
      }, []);

      const geometry = new THREE.BufferGeometry();

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertexes, 3)
      );

      const material = new THREE.LineDashedMaterial({
        color,

        linewidth: w,

        dashSize: ds,

        gapSize: gs
      });

      const line = new THREE.Line(geometry, material);

      line.computeLineDistances();

      return line;
    } /**

     * @description:

     * @param {Number} A   分布半径

     * @param {Number} num 分布的物体个数

     * @param {Number} φ   初始角度

     * @return: Array

     */, // 根据正弦 余弦  x=Asin(ωt+φ)+k z=Acos(ωt+φ)+k

    getPosition(A, num, Ψ = 0) {
      const position = [];

      const w = (Math.PI * 2) / num;

      for (let t = 0; t < num; t++) {
        const θ = w * t + Ψ;

        position.push([A * Math.cos(θ), A * Math.sin(θ), θ]);
      }

      return position;
    },
    /**

     * @description: 根据弧形片段的宽度、间隔、个数求出弧形片段所围成的圆的半径

     * @param {Number} w 弧形片段的宽度

     * @param {Number} gap 弧形片段的间隔

     * @param {Number} n 弧形片段的个数

     * @return:

     */

    getR(w, gap, n) {
      const side = w + gap;
      const θ = (2 * Math.PI) / n;
      return side / (2 * Math.sin(θ / 2));
    }
  }
};
</script>

 

<style lang="less">
main.three-demo {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#rederer-dom  {
  min-width: 800px;
  min-height: 800px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

 

 