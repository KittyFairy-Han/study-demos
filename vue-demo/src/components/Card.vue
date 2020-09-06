<template>
    <div class="card" :class="card.state" @click="changeState">{{card.value}}</div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props:{
            card:{
               value:0,
               state:''
            } ,
        },
        data() {
            return {}
        },
        computed: {

        },
        created() {
        },
        mounted() {
        },
        methods: {
            changeState(){
                this.$emit('handleChange',this.card)

            },
        }

    }
</script>

<style lang="less" scoped>
    div{
        width: 20%;
        height: 100px;
        background-color: green;
        margin-bottom: 20px;
        float: left;
        margin: 10px;
        background-color: antiquewhite;
        text-align: center;
        line-height: 100px;
        color: white;
        font-size: 40px;
    }
    div.pre{
        background-color: #f6d572;
    }
    div.current{
        background-color: #2dca93;
    }
</style>
