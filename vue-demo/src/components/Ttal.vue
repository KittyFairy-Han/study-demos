<template>
    <div class="total">
        <div class="inline" v-show="pre">上一张卡片id=<span>{{pre}}</span>,</div>
        <div class="inline" v-show="cur">本张卡片id=<span>{{cur}}</span>，</div>
        <div class="inline" v-show="pre&&cur">和为<span>{{total}}</span></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {
            cur: {
                type: Number,
                default: 0
            },
            pre: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {}
        },
        computed: {
            total() {
                return this.pre + this.cur
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {}

    }
</script>

<style lang="less" scoped>
    div.total {
        width: 80%;
        margin: 20px auto;
        font-size: 20px;
        color: #a49f99;
        div{
            display: inline-block;
        }
        span {
            color: #2c3e50;
        }
    }

</style>
