<template>
    <div :class="getClass" @click="changeState"></div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props:{
            lightState:{
                type:Object,
            }
        },
        data() {
            return {}
        },
        computed: {
            getClass(){
                console.log(this.lightState.isLight)
                return this.lightState.isLight?'active':''
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            changeState(){
                this.$emit('handleChange',this.lightState)
            },
        }

    }
</script>

<style lang="less" scoped>
    div{
        width: 50px;
        height: 50px;
        background-color: #7ee5e9;
        margin-bottom: 20px;
        float: left;
        border-radius: 50%;
        margin: 10px;
    }
    div.active{
        background-color: #ffa79d;
    }
</style>
