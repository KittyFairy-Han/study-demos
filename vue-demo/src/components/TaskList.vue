<template>
    <ul class="task-list" v-show="taskList.length" >
        <li v-for="item in taskList">
            <span>{{item.text}}</span>
            <!--<span>{{item.createTime}}</span>-->
            <button class="fns" v-show="!item.done" @click="finishItem(item)">完成</button>
            <button class="del" v-show="item.done" @click="deleteItem(item)">删除</button>
        </li>
        <h3>----</h3>
    </ul>
</template>

<script>
    export default {
        name: '',
        components: {},
        props:{
            taskList:{
                type:Array,
                default:[]
            }
        },
        data() {
            return {}
        },
        computed: {},
        created() {
        },
        mounted() {
        },
        methods: {
            finishItem(item){
                console.log('itemFinish',item);
                this.$emit('itemFinish',item)
            },
            deleteItem(item){
                this.$emit('itemDelete',item)
            }
        }

    }
</script>

<style lang="less" scoped>
    .task-list{
        margin: 10px 2%;
        li{
            padding: 5px;
            margin-bottom: 5px;
            height: 30px;
            border-radius: 5px;
            color: #568182;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            span{
                font-size: 16px;
                text-align: left;
            }
             button{
                background-color: #2dca93;
                 color: white;
                 font-size: 14px;
                 box-shadow: 0 0 5px white;
             }
            button.del{
                background-color: #ca7071;
            }
        }
    }
    .todo-list{
        li{
            background-color: rgba(167, 133, 230, 0.43);
        }
    }
    .finish-list{
        li{
            background-color: #2dca938c;
        }
    }
</style>
