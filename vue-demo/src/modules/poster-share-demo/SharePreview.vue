<template>
  <section class="share-preview">
    <div class="share-wrapper">
      <div class="share-container" id="magic-result-share-poster">
        <!-- <img class="bg" src="./images/bg.jpg"> -->
        <header>
          <p class="title">欧气分享</p>
          <p class="nickname">用户昵称 {{ '小小' }}</p>
        </header>
        <div class="prizes">
          <five :useAnimation="false" :prizes="prizes"></five>
        </div>

        <footer>
          <div class="text">
            <p>扫码进入<span class="highlight">“ 黑钻魔法城 ”</span></p>
            <p>测测你的今日欧气~</p>
          </div>
          <img id="magic-result-qrcode" :src="qrcodeImg" class="qrcode" />
        </footer>
      </div>
    </div>

    <ul class="btn-group">
      <li
        class="wx"
        :class="{ disabled: !canShare }"
        @click="toShare('wechat')"
      >
        <!-- <span>微信</span> -->
      </li>
      <li
        class="pyq"
        :class="{ disabled: !canShare }"
        @click="toShare('wechat_line')"
      >
        <!-- <span>朋友圈</span> -->
      </li>
      <li class="download" :class="{ disabled: !canShare }" @click="toShare">
        <!-- <span>下载图片</span> -->
      </li>
    </ul>
    <!-- <form
			action="http://hn216.api.yesapi.cn/?s=App.CDN.UploadImg&app_key=86B2B0991EEDAB4AE2B7C4306374BA70"
			method="post"
			enctype="multipart/form-data"
		>
			<input type="file" name="file" />
			<button type="submit" class="btn btn-success">upload</button>
		</form> -->
  </section>
</template>

<script>
import Poster from "./poster";
// 组件多了用异步动态引入，目前只有两个，都比较小暂用静态引入
import Five from "./Five.vue";
import bgImg from "./images/bg.jpg"
export default {
  components: {  Five },
  props: {
  
    prizes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      qrcodeImg: "",
      shareImg: "",
      loading: false,
      actionUrl: "http://47.96.134.52/upl/getFile.php",
      canShare: true,
    };
  },
  computed: {},
  async created() {},
  async mounted() {
    this.poster = new Poster();
    const qrcodeDom = document.getElementById("magic-result-qrcode");
    const shareUrl = `${window.location.origin}/#/magicCastle`;
    this.poster.getQrcode({
      qrcodeDom,
      shareUrl,
      style: { size: 114, black: "#381e82" },
    });
  },
  methods: {
    async toShare(channel) {
      // this.$loading("图片文件生成中...");

      const file = await this.poster.getPosterFile({
        posterDom: document.getElementById("magic-result-share-poster"),
      });
      // const imgurl = await this.poster.uploadPoster({
      //   uploadUrl: this.actionUrl,
      //   uploadParams: { file },
      // });

      // this.$loading.close();

      // this.$hybrid("shareHDImage", {
      //   channel,
      //   imgurl,
      // });
      // alert("模拟网图" + imgurl);

      // 检查生成的二进制文件是否是正常的图片
      const srcData = URL.createObjectURL(file)
      this.previewImg(srcData)
    },
    // handleImgAllLoad() {
    // 	this.canShare = true
    // },
    previewImg(srcData) {
      const img = document.createElement("img");
      img.src = srcData;
      img.style.position = "fixed";
      img.style.top = "5%";
      img.style.width = "90%";
      img.style.left = "5%";
      img.onclick = () => {
        img.remove();
      };
      document.body.appendChild(img);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./util.less");

.share-preview {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(84.72deg, #2f50c6 -66.33%, #7028a8 89.79%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .share-wrapper {
    position: relative;
    width: 375px;
    height: 650px;
    border-radius: 8px;
    transform: scale(0.9);
    overflow: hidden;
    .share-container {
      position: relative;
      .el-fit-bgimg(375px,650px,url("./images/bg.jpg"));
      img.bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      position: relative;
      box-sizing: border-box;
      header {
        position: absolute;
        left: 22px;
        
        top: 15px;
        
       
        >p{
          margin: 0;
          text-align: left;
        }
        .title {
          font-size: 28px;
     
          color: #cd5beb;
          letter-spacing: 5px;
        
        }
        .nickname {
        
          font-size: 13px;
         
          color: #ddd0ff;
          
        }
      }
      .prizes {
        width: 0.5*549px;
        height: 0.5*616px;
        position: absolute;
        top: 0.5*316px;
        left: 0.5*101px;
        transform: scale(0.75);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      footer {
        position: absolute;
        left: 22px;
        right: 22px;
        bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text {
          font-size: 18px;
          line-height: 150%;
          color: #ddd0ff;
          font-weight: bold;
          >p{
            text-align: left;
          }
          .highlight {
            color: #62c4e9;
          }
        }
        .qrcode {
          width: 64px;
          height: 64px;
          background-color: rgba(221, 216, 221, 0.349);
        }
      }
    }
    .final-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .btn-group {
    display: flex;
    li {
      width: 40px;
      // height: 46px;
      margin: 0 6px;
      text-align: center;
      font-size: 10px;
      line-height: 13px;
      white-space: nowrap;
      color: #ddd0ff;
      padding-top: 33px;
      position: relative;
      &.disabled {
        opacity: 0.6;
        pointer-events: none;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 7.5px;
        width: 25px;
        height: 25px;
        background-size: 100% 100%;
      }
      &.wx::before {
        background-image: url("./images/icon-wx.png");
      }
      &.pyq::before {
        background-image: url("./images/icon-pyq.png");
      }
      &.download::before {
        background-image: url("./images/icon-download.png");
      }
    }
  }
}
</style>
