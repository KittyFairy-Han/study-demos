import html2canvas from 'html2canvas'
import { createQrCodeImg } from './qrcode'

function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

async function createPoster(posterDom, drawCanvasConfiguration, canvasToDataConfiguration, useFile) {
  if (!isObj(drawCanvasConfiguration)) {
    drawCanvasConfiguration = {
      useCORS: true,
    }
  }
  if (!isObj(canvasToDataConfiguration)) {
    canvasToDataConfiguration = {
      type: 'image/jpg',
      encoderOptions: 1,
    }
  }
  try {

    const canvasEle = await html2canvas(posterDom, drawCanvasConfiguration)
    const { type, encoderOptions } = canvasToDataConfiguration
    if (useFile) {
      let posterFile = await new Promise((resolve) => {
        canvasEle.toBlob((result) => {
          resolve(result)
        }, type, encoderOptions)
      })
      return posterFile
    } else {
      const posterB64 = canvasEle.toDataURL(type, encoderOptions)
      return posterB64
    }

  } catch (e) {
    console.error(e)
  }


}

async function uploadByXml(url, formData) {
  return new Promise((resolve) => {
    //创建xhr对象
    let xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //异步接受响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status === 304) {
          //callback为回调函数，如果不设置则无回调
          resolve(xhr.responseText)
        }
      }
    };
    xhr.open("post", url, true);
    xhr.setRequestHeader("Referer", "47.96.134.52") // 添加 HTTP 头


    xhr.send(formData);

  })





}


async function uploadByFetch(url, formData) {
  const res = await fetch(url, {
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
    mode: 'no-cors',
    method: 'POST',
    body: formData,
  });

  return res


}




export default class PosterShare {
  constructor(useCache = false) {
    /**
     * 是否使用缓存
     * 是：调用getPosterB64时，当前实例有posterB64，则不重新生成，直接返回。posterFile、posterUrl 同理
     * 否：调用getPosterB64时，重新生成，有posterB64则覆盖原来的。posterFile、posterUrl 同理
     */
    this.useCache = useCache//是否使用缓存。
    this.qrcodeDom = null //二维码图片的容器节点
    this.url = '' // 扫描海报中的二维码后跳转的链接
    this.qrcode = null //二维码图片
    this.posterDom = null //生成海报的节点
    this.posterB64 = null //分享图（base64)
    this.posterFile = null //分享图 （file)
    this.posterUrl = null //分享图 (在线url)
  }

  /**
   *
   * @param qrcodeDom {HTMLElement} qrcodeDom.src = 生成的二维码图片
   * @param shareUrl {String} 扫描海报中的二维码后跳转到的目标链接
   * @param style {Object} 透传给 createQrCodeImg，用来配置二维码样式。所有属性：size、black、white
   * @returns {baseb4}
   */
  getQrcode({ qrcodeDom, shareUrl = window.location.href, style }) {
    const qrcode = createQrCodeImg(shareUrl, style)
    let result
    if (qrcodeDom) {
      qrcodeDom.src = qrcode
      result = qrcodeDom
    } else {
      result = qrcode
    }
    this.qrcodeDom = qrcodeDom
    this.qrcode = qrcode
    this.url = shareUrl
    return result
  }

  /**
   *
   * @param posterDom {HTMLElement} 生成canvas的dom源
   * @param drawCanvasConfiguration {Object} 透传给 html2canvas，所有属性见 https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-configuration.html
   * @param canvasToDataConfiguration {Object} 透传给 canvasEle.toDataURL, 所有属性见 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL
   * @returns {baseb4} 图片的base64编码字符串
   */
  async getPosterB64({ posterDom = document.body, drawCanvasConfiguration, canvasToDataConfiguration }) {
    // drawCanvasConfiguration, canvasToDataConfiguration 如果不是形如 {} 都会失效，使用默认的配置
    if (this.useCache && this.posterB64) {
      return this.posterB64
    }
    const posterB64 = await createPoster(posterDom, drawCanvasConfiguration, canvasToDataConfiguration, false)
    this.posterDom = posterDom
    this.posterB64 = posterB64
    return posterB64
  }

  /**
  *
  * @param posterDom {HTMLElement} 生成canvas的dom源
  * @param drawCanvasConfiguration {Object} 透传给 html2canvas，所有属性见 https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-configuration.html
  * @param canvasToDataConfiguration {Object} 透传给 canvasEle.toBlob, 所有属性见 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob
  * @returns {Blob} 图片的二级制数据
  */
  async getPosterFile({ posterDom = document.body, drawCanvasConfiguration, canvasToDataConfiguration }) {
    // drawCanvasConfiguration, canvasToDataConfiguration 如果不是形如 {} 都会失效，使用默认的配置
    if (this.useCache && this.posterFile) {
      return this.posterFile
    }
    const posterFile = await createPoster(posterDom, drawCanvasConfiguration, canvasToDataConfiguration, true)
    this.posterDom = posterDom
    this.posterFile = posterFile
    return posterFile
  }

  /**
  *
  * @param uploadUrl {String} 上传的接口路径
  * @param uploadParams {*} 接口传参
  * @returns {string} 图片的在线地址
  */
  async uploadPoster({ uploadUrl, uploadParams,file }) {
    if (this.useCache && this.posterUrl) {
      return this.posterUrl
    }
    try {
      const formData = new FormData();
      Object.keys(uploadParams).forEach(item => {
        formData.append(item, uploadParams[item])
      })

      const res = await uploadByFetch(uploadUrl, formData)
      const data = await res.json()
      console.log(res,data)


      const posterUrl = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('https://hzstatic.oa.netease.com/oaWebV4/favicon.png')
        }, 2000);

      })
      this.posterUrl = posterUrl
      return posterUrl

    } catch (e) {
      console.error(e)
    }
    const posterUrl = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('https://hzstatic.oa.netease.com/oaWebV4/favicon.png')
      }, 2000);

    })
    this.posterUrl = posterUrl
    return posterUrl
  }
}




export function watchImgLoad(list) {
  const urls = Array.from(new Set(list))
  const imgsLoadState = new Map(urls.map((item) => [item, false]))
  return new Promise((resolve) => {
    urls.forEach((item) => {
      const dom = new Image()
      dom.src = item
      dom.onload = (e) => {
        imgsLoadState.set(e.target.src, true)
        const states = [...imgsLoadState.values()]
        const isAllLoad = states.every((item) => item)
        console.log('load', e.target.src)
        isAllLoad && resolve(true)
        // isAllLoad && resolve(true)
      }
    })
  })
}






