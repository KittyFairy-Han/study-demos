<template>
    <section class="progress-setting">
        <div class="title">设置面板</div>
        <div class="set-base">
            <div class="set-value">
                <div>
                     <label for="set-value">进度数值:</label>
                     <input id="set-value" v-model="passPercent" :placeholder="passPercent" @change="changeInner"/>
                </div>
                <div>
                     <label for="set-width">宽:</label>
                    <input id="set-width" v-model="outerWidth" :placeholder="outerWidth" @change="changeOuter"/>
                </div>
                <div>
                   <label for="set-height">高:</label>
                   <input id="set-height" v-model="outerHeight" :placeholder="outerHeight" @change="changeOuter"/>
                </div>
            </div>
        </div>
        <div class="set-theme">
            <label for="set-color">前景颜色:</label>
            <input id="set-color" type="color" @change="changeInner" v-model="themeColor"/>
            <label for="set-bgcolor">背景颜色:</label>
            <input id="set-bgcolor" type="color" @change="changeOuter" v-model="bgColor"/>
        </div>
    </section>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {},
        data() {
            return {
                passPercent: 10,
                themeColor: '#2dca93',
                bgColor: "#cbf4ca",
                outerWidth: 300,
                outerHeight: 10,

            }
        },
        computed: {},
        created() {
            this.changeOuter()
            this.changeInner()
        },
        mounted() {
        },
        methods: {
            changeInner() {
                let innerSet = {
                    percent: this.passPercent,
                    color: this.themeColor
                }
                this.$emit('handleInner', innerSet)
            },
            changeOuter() {
                let outerSet = {
                    width: this.outerWidth,
                    height: this.outerHeight,
                    color: this.bgColor
                }
                this.$emit('handleOuter', outerSet)
            },
        },
        watch: {}
    }
</script>

<style lang="less" scoped>
    .progress-setting {
        background-color: #f1ece59c;
        margin: 10% 5% 0 10%;
        padding-bottom: 20px;
        box-shadow: 0 0 10px #f0e6e6;
        border-radius: 20px;
        .title {
            font-weight: 600;
            font-size: 24px;
        }
        .set-base {
            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 100px;
            .set-value {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                label {
                    margin-right: 10px;
                }
                input {
                    max-width: 100px;
                    height: 30px;
                    padding-left: 20px;
                }
            }
            .set-display {
                text-align: center;
                line-height: 30px;
                background-color: #2dca93;
                color: white;
                font-weight: 600;
                padding: 10px;
            }
        }

    }

</style>
