<!--
 * @Author: 鱼小柔
 * @Date: 2020-03-07 22:31:17
 * @LastEditors: your name
 * @LastEditTime: 2020-09-06 17:00:33
 * @Description: file content
-->
<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/todo-list">
            <span class="tab-link">todo</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/record-card">
            <span class="tab-link">卡片记录</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/lighten-it">
            <span class="tab-link">点灯</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/progress-bar">
            <span class="tab-link">进度条</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/class-table">
            <span class="tab-link">课程表</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/compass-demo">
        <span class="tab-link">罗盘</span>
        </router-link>
        
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped lang="less" rel="stylesheet/stylus">
    .tab {
        display: flex;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        .tab-item {
            flex: 1;
            text-align: center;
            .tab-link {
                padding-bottom: 5px;
                color: grey;

            }
            &.active{
                .tab-link {
                    color: #2c3e50;
                    font-weight: 600;
                }
            }
        }

    }


</style>
