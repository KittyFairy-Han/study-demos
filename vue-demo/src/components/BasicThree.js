/*
 * @Author: 鱼小柔
 * @Date: 2020-03-21 11:45:17
 * @LastEditors: your name
 * @LastEditTime: 2020-03-22 19:00:39
 * @Description: file content
 */
/*

 * @Author: hanqing5

 * @Date: 2020-03-17 15:42:15

 * @LastEditors: hanqing5

 * @LastEditTime: 2020-03-20 17:59:06

 * @Description: 文件描述

 */

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const BaseThree = {
  data() {
    return {
      scene: null,

      camera: null,

      rdr: null,

      controls: null,

      mixers: []
    };
  },

  methods: {
    init() {
      // 分别初始化 场景、相机、渲染器、控制器、灯光
     
      this.initFontLoader();

      this.initScence();

      this.initCamera();

      this.initRender();

      this.initObirt();

      this.initClock();

      this.initLights();

      this.initAxises();

      this.initXYZVectors();

      // 渲染

      this.animate();
    },

    initScence() {
      let scene = new THREE.Scene();
      scene.background = 0xffffff;
      this.scene = scene;
    },

    initCamera() {
      const { clientWidth, clientHeight } = this.$refs.rdrWrapper;

      this.camera = new THREE.PerspectiveCamera(45, clientWidth / clientHeight, 1, 1000);

      this.camera.position.set(50, 90, 500);

      this.scene.add(this.camera);
    },

    initRender() {
      this.rdr = new THREE.WebGLRenderer({
        antialias: true,

        canvas: document.getElementById("rederer-dom")
      });

      const { clientWidth, clientHeight } = this.$refs.rdrWrapper;

      this.rdr.setSize(clientWidth, clientHeight);

      this.rdr.setPixelRatio(window.devicePixelRatio);

      this.rdr.setClearColor(0x000000); // black
    },

    initLights() {
      const light1 = new THREE.DirectionalLight(0xffffff);

      light1.position.set(0, 1, 0);

      this.scene.add(light1);
    },

    initObirt() {
      let controls = new OrbitControls(this.camera, this.rdr.domElement);

      controls.enableDamping = true; // 拖拽时视觉上有重力感应，要在 animate 里面调用 this.controls.update
      controls.dampingFactor = 0.05; // 阻尼惯性 只有 enableDamping 设置为 true 才生效
      controls.screenSpacePanning = false; // 摄像机在垂直于摄像机上方向的平面上平移 若为 true 则垂直的对象是屏幕
      controls.minDistance = 100;

      controls.maxDistance = 500;

      controls.maxPolarAngle = Math.PI / 2;

      this.controls = controls;
    },

    initClock() {
      this.clock = new THREE.Clock();
    },

    initFontLoader() {
      this.fontLoader = new THREE.FontLoader();

      this.fontUrl = "/three-fonts/helvetiker_regular.typeface.json";

      this.textureLoader = new THREE.TextureLoader();
    },

    initAxises() {
      const w = 0.1;

      const h = 100;

      const geometryY = new THREE.BoxGeometry(w, h, w);

      const geometryX = new THREE.BoxGeometry(h, w, w);

      const geometryZ = new THREE.BoxGeometry(w, w, h);

      const geometry = new THREE.TorusGeometry(h, w, 100, 100);

      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

      const cylinderX = new THREE.Mesh(geometryX, material);

      const cylinderY = new THREE.Mesh(geometryY, material);

      const cylinderZ = new THREE.Mesh(geometryZ, material);

      const torus = new THREE.Mesh(geometry, material);

      cylinderX.position.set(h / 2, 0, 0);

      cylinderY.position.set(0, h / 2, 0);

      cylinderZ.position.set(0, 0, h / 2);

      torus.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);

      this.scene.add(cylinderX, cylinderY, cylinderZ, torus);

      this.fontLoader.load(this.fontUrl, font => {
        const nameX = this.createAxisText("X", font);

        const nameY = this.createAxisText("Y", font);

        const nameZ = this.createAxisText("Z", font);

        nameX.position.set(h, 0, 0);

        nameY.position.set(0, h, 0);

        nameZ.position.set(0, 0, h);

        this.scene.add(nameX, nameY, nameZ);
      });
    },

    initXYZVectors() {
      this.XAV = new THREE.Vector3(1, 0, 0);

      this.YAV = new THREE.Vector3(0, 1, 0);

      this.ZAV = new THREE.Vector3(0, 0, 1);
    },

    createAxisText(text, font) {
      const matLite = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xffff00),

        transparent: true,

        opacity: 0.4,

        side: THREE.DoubleSide
      });

      const geometry = new THREE.TextGeometry(text, {
        font: font,

        size: 10,

        height: 2,

        curveSegments: 10
      });

      return new THREE.Mesh(geometry, matLite);
    },

    animate() {
      requestAnimationFrame(this.animate);

      this.controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
      this.render();
    },

    render() {
      const delta = this.clock.getDelta();

      this.mixers.forEach(item => {
        item.update(delta);
      });

      this.rdr.render(this.scene, this.camera);
    },

    /* 浏览器事件 */

    initBroswerEvent() {
      window.addEventListener(
        "resize",

        () => {
          const { clientWidth, clientHeight } = this.$refs.rdrWrapper;

          this.camera.aspect = clientWidth / clientHeight;

          this.camera.updateProjectionMatrix();

          this.rdr.setSize(clientWidth, clientHeight);
        },

        false
      );
    }
  }
};

export default BaseThree;
