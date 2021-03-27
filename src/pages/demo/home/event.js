/*
 * @Author: hanqing5
 * @Date: 2020-11-19 17:46:01
 * @LastEditors: hanqing5
 * @LastEditTime: 2020-12-08 15:46:25
 * @Description: demo 事件管理
 */

import EventBus from "../../common/event"
// 定义事件类型
export const demoEventTypes = {
  CALLING: "0000010001",
}
// 定义观察者
export const demoObserver = new EventBus()

