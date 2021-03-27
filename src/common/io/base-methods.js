/*
 * @Author: hanqing5
 * @Date: 2019-10-12 09:53:41
 * @LastEditors: hanqing5
 * @LastEditTime: 2020-12-11 18:34:25
 * @Description: 对 get post 请求进行封装
 */

import service from './interceptor'

/**
 * @description: GET 请求
 * @param {String} url
 * @return: Promise
 */    
const getRequest = (url) => {
    return (params) => {
        // console.log(params)
        return service.get(url, {
            params,
        })
    }

}
/**
 * @description: POST 请求 
 * @param {String} url
 * @return: Promise 
 */
const postRequest = (url) => {
    return (data) => {
        return service.post(url, data)
    }
} 

export {
    getRequest,
    postRequest
}