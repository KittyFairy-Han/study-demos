/*
 * @Author: hanqing5
 * @Date: 2020-12-11 18:22:05
 * @LastEditors: hanqing5
 * @LastEditTime: 2020-12-11 18:22:09
 * @Description: 文件描述
 */
export default [
    [
      RegExp("/iarrm-bldm/demo/getString.*"),
      "get",
      () => {
        return {
          type: 0,
          msg: "success",
          data: "hello client",
        }
      },
    ],
    [
      "/iarrm-bldm/demo/updateString",
      "post",
      () => {
        return {
          type: 0,
          msg: "success",
          data: "成功",
        }
      },
    ],
  ]