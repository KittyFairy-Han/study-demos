/*
 * @Author: hanqing5
 * @Date: 2019-10-18 16:36:06
 * @LastEditors: hanqing5
 * @LastEditTime: 2020-12-11 10:06:08
 * @Description: 事件发布订阅基类
 */

import Vue from 'vue'
class EventBus {
    constructor() {
        this.$eventBus = new Vue()
    }
    pub(name, data) {
        this.$eventBus.$emit(name, data)
    }
    sub(name, call) {
        this.$eventBus.$on(name, call)
    }
    subonce(name, call) {
        this.$eventBus.$once(name, call)
    }
    unsub(name) {
        this.$eventBus.$off(name)
    }
}
export default EventBus
