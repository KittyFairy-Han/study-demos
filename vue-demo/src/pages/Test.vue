<template>
  <main>
    <button @click="toShare">点我生成海报并绘制到屏幕</button>
    <img class="poster-pic" :src="posterPicData" alt="">
    <section  id="magic-result-share-poster" class="list-box">
      <h2>恭喜你中了xxx等奖</h2>
      <div class="pic-box" v-for="(item, index) in list" :key="index">
        <img :src="item" alt="" />
      </div>
    </section>
  </main>
</template>

<script>
import Poster from "../components/poster/index";
export default {
  data() {
    return {
      list: [
        "https://img0.baidu.com/it/u=2300074797,1177194447&fm=26&fmt=auto",
        "https://img0.baidu.com/it/u=4278711527,768258772&fm=26&fmt=auto",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F11%2F20180311230642_wEf4Q.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637655384&t=dd30d6b4b322.59d71a91c4327a1cbf948",
        "https://c.53326.com/d/file/lan2018070309/mykni35l2ke.jpg",
        "https://image.uc.cn/s/wemedia/s/upload/2020/d240615e4c83f93700106fb4d87e64b7.jpg",
        "https://c.53326.com/d/file/lan2018070209/msl13w1t01i.jpg",
      ],
      posterPicData:undefined,
    };
  },
  async mounted() {
    this.poster = new Poster();
    const qrcodeDom = document.getElementById("magic-result-qrcode");
    const shareUrl = `${window.location.origin}/#/test`;
    this.poster.getQrcode({
      qrcodeDom,
      shareUrl,
      style: { size: 114, black: "#381e82" },
    });
  },
  methods:{
    async toShare() {

			const file = await this.poster.getPosterFile({
				posterDom: document.getElementById('magic-result-share-poster'),
			})

			// 检查生成的二进制文件是否是正常的图片
			const srcData = URL.createObjectURL(file)
			this.posterPicData = srcData
		},
    
  }
};
</script>

<style lang="less">
.list-box {
  position: relative;
  box-sizing: border-box;
  width: 375px;
  height: 650px;
  background-image: url('../img/bg_share.jpg');
  background-size: 100% 100%;
  padding: 112.5px 22.5px 137.5px 22.5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  h2 {
    position: absolute;
    left: 22.5px;
    top: 22.5px;
    color: white;
  }
}
.pic-box {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
h1{
  text-align: center;
  cursor: pointer;
}
.poster-pic{
  position: absolute;
  width: 375px;
  left: 0;
  top: 250px;
  box-shadow: rgba(0, 0, 0, 0.349) -10px -10px 10px;
  z-index: 10;
}
</style>