/*
 * @Author: hanqing5
 * @Date: 2020-12-11 18:06:05
 * @LastEditors: your name
 * @LastEditTime: 2020-12-13 17:56:19
 * @Description: 文件描述
 */
import Vue from 'vue'
import axios from "axios"

Vue.prototype.$ajax = axios
/* 创建实例 */
const service = axios.create({
  timeout: 12e3,
})
/* 请求拦截 */
service.interceptors.request.use(
  (config) => {
    if (document.querySelector("meta[name=_csrf]")) {
      let csrftoken = document.querySelector("meta[name=_csrf]").getAttribute("content")
      let csrfheader = document.querySelector("meta[name=_csrf_header]").getAttribute("content")
      config.headers[csrfheader] = csrftoken
    }

    // console.log('请求拦截succeed')
    return config
  },
  (error) => {
    // console.log('请求拦截error', error)
    return Promise.reject(error)
  }
)
/* response拦截 */
service.interceptors.response.use(
  // 请求成功
  (response) => {
    // console.log('响应拦截succeed', response)
    if (response.status === 200) {
      const { data } = response

      if (data.type === 0 || data.code === "0") {
        return data.data
      } else {
        MessageBoxError(data.message)
        return Promise.reject(response)
      }
    } else {
      errorHandle(response)
      return Promise.reject(response)
    }
  },
  // 请求失败
  (error) => {
    // console.log('响应拦截error', error)
    errorHandle(error.response)
    return Promise.reject(error)
  }
)

/* token和登录 */
const toLogin = () => {
  alert("跳转到项目的登陆页")
  // router.push("/login")
}

/* 响应拦截对请求失败的具体处理 */
const errorHandle = ({ status } = response) => {
  // 状态码判断
  switch (status) {
    //前端传参错误
    case 400:
      MessageBoxError("请求参数错误")
      break
    // 401: 未登录状态，跳转登录页
    case 401:
      MessageBoxError("请登录")
      toLogin()
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      MessageBoxError("登录过期,请重新登录")
      toLogin()
      break
    // 404请求不存在
    case 404:
      MessageBoxError("未找到该接口")
      break
    case 408:
      MessageBoxError("服务器连接超时")
      break
    //5xx服务器错误
    case 500:
      MessageBoxError("服务器内部错误")
      break
    case 503:
      MessageBoxError("服务器不可用")
      break
    case 504:
      MessageBoxError("网关连接超时")
      break
    default:
      MessageBoxError(`请求失败,原因未知,状态码${status}`)
  }
}

/* 错误提示封装方法 */
function MessageBoxError(msg) {
  // MessageBox({
  //   title: "系统错误",
  //   type: "error",
  //   message: msg,
  // })
  alert("错误提示")
}

export default service
