<template>
    <section class="outer" :style="outerStyle" @click.prevent="clickPercent">
        <div class="inner" :style="innerStyle"
        ></div>
    </section>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {
            bgImg: {
                type: [String],
                default: ''
            },
            outerSet: {
                type: [Object],
            },
            innerSet:{
                type: [Object],
            }
        },
        data() {
            return {
                touch:{}
            }
        },
        computed: {
            innerStyle() {
                let passPercent = this.innerSet.percent;
                if (this.innerSet.percent > 100) {
                    passPercent = 100
                }
                if (this.innerSet.percent <= 0) {
                    passPercent = 1
                }
                let obj
                if(Number(this.outerSet.width)>Number(this.outerSet.height)){
                    obj = {
                        width: `${passPercent}%`,
                        height:  `100%`,
                    }
                }else{
                    obj = {
                        width:  `100%` ,
                        height:  `${passPercent}%`,
                    }
                }
                return {
                    ...obj,
                    backgroundColor: this.innerSet.color,
                    backgroundImage: `url(${this.bgImg})`
                }
            },
            outerStyle() {
                let obj={}
                if(Number(this.outerSet.width)>Number(this.outerSet.height)){
                   obj = {
                        top:'15px',
                        left:'50%',
                        marginLeft:`${-this.outerSet.width/2}px`,
                    }
                }else{
                   obj = {
                       left:'15px',
                        top:'50%',
                        marginTop:`${-this.outerSet.height/2}px`,
                    }
                }
                return {
                    ...obj,
                    backgroundColor: `${this.outerSet.color}`,
                    width: `${this.outerSet.width}px`,
                    height: `${this.outerSet.height}px`,
                }
            },
            isVer(){
                return Number(this.outerSet.height)>Number(this.outerSet.width)
            }
        },
        created() {

        },
        mounted() {
        },
        methods: {
            startPercent(e){
                if(this.isVer) return
                console.log('start',e)
                this.touch.initiated = true;
                this.touch.startX = e.touches[0].pageX;//第一根手指触碰时的x位置
                this.touch.left = e.target.clientWidth//刚触碰时距离左边的长度
            },
            movePercent(e){
                if (!this.touch.initiated) {
                    return
                }
                let moveX = e.touches[0].pageX;//拖动时的x位置
                let offset = moveX - this.touch.startX + this.touch.left;//移动时偏移的长度（moveX - this.touch.startX  是变化的宽度）
                let percent = offset/this.outerSet.width*100;
                this.$emit('percentChanging', percent)
            },
            endPercent(e){
                this.touch.initiated = false;
            },
            clickPercent(e){
                console.log(e)
                this.touch.initiated = false;
                let percent;
                if(this.isVer){
                    let offset = e.clientY-145;
                    percent=offset/this.outerSet.height*100
                }else {
                    let offset = e.clientX-e.target.offsetLeft;
                    percent=offset/this.outerSet.width*100
                }
                this.$emit('percentChanging', percent)
            }
        },
        watch: {}
    }
</script>

<style lang="less" scoped>
    .outer {
        position: absolute;
        padding: .5% 0;
        width: 90%;
        height: 1.5%;
        border-radius: 25px;
        background-color: antiquewhite;
        transform-origin: 3% 10%;
        transition: all linear .1s;
        .inner {
            height: 100%;
            border-radius: 25px;
            background-size: auto 100%;
            background-position: center;
            background-repeat: repeat;
            transition: all linear .1s;
        }
    }

</style>
