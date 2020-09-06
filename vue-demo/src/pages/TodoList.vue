<template>
    <div id="app">
            <section class="sort-button-group">
                <button class="sort-button" @click="sortSc"><span>创建时间</span>↑</button>
                <button class="sort-button" @click="sortDesc"><span>创建时间</span>↓</button>
            </section>

            <section class="todo-list">
                <h3>未完成的</h3>
                <task-list :taskList="this.todoList" @itemFinish="finishItem"></task-list>
                <div class="space-place" v-if="todoList.length==0">都完成了，很棒哦~~</div>
            </section>

            <section class="finish-list">
                <h3>已完成的</h3>
                <task-list :taskList="this.finishList" @itemDelete="deleteItem"></task-list>
                <div class="space-place" v-if="finishList.length==0">还没有已完成的任务哦~~</div>
            </section>

            <section class="add-task">
                <input v-model="text">
                <button @click="addItem">add</button>
            </section>
    </div>
</template>

<script>
    import TaskList from '../components/TaskList.vue'

    export default {
        name: '',
        components: {
            TaskList
        },
        data() {
            return {
                todos: [
                    {text: "叶凌宵 让我看看发生了什么", done: false, createTime: new Date('2018-12-29').getTime()},
                    {text: "莫雨琦 小老弟，咋回事？", done: false, createTime: new Date('2018-12-30').getTime()},
                    {text: "谁想成为表情包", done: false, createTime: Date.now()},
                ],
                text: '',
            }
        },
        computed: {
            finishList() {
                return this.todos.filter((item) => {
                    return item.done;
                })
            },
            todoList() {
                return this.todos.filter((item) => {
                    return !item.done;
                })
            }
        },
        created() {

        },
        mounted() {
        },
        methods: {
            addItem() {
                this.todos.push({
                    text: this.text,
                    done: 0,
                    createTime: new Date().getTime(),
                });
            },
            finishItem(item) {
                item.done = 1
            },
            deleteItem(item){
                let index = this.todos.findIndex((e)=>{
                    return e===item;
                });
                this.todos.splice(index,1)
            },
            sortDesc() {
                this.todos.sort((x, h) => {
                    return h.createTime - x.createTime
                })
            },
            sortSc() {
                console.log('desc');
                this.todos.sort((x, h) => {
                    return x.createTime - h.createTime
                })
            },
        },

    }
</script>

<style lang="less" scoped>
   .sort-button-group{
       margin:0 7%;
       display: flex;
       justify-content: space-between;
       align-items: stretch;
       height: 50px;
       button{
           flex: 1;
           color: white;
           font-size: 20px;
           font-weight: bold;
           span{
               padding-right: 10px;
               font-size: 12px;
           }
       }
       button:first-child{
           background-color: #a271ff;
       }
       button:last-child{
           background-color: #2dca93;
       }

   }
   .todo-list,.finish-list{
       background-color: #f5f6f5;
       margin:20px 5%;
       h3{
           padding: 3px;
       }
       .space-place{
           width: 100%;
           height: 100px;
           text-align: center;
           line-height: 100px;
           font-size: 20px;
       }
   }

    .add-task{
        width: 80%;
        height: 50px;
        margin:20px 10%;
        display: flex;
        justify-content: space-around;
        input{
            /*border:#7c7dd7 solid 1px;*/
            outline: #7c7dd7 solid 1px;
            flex: 1;
        }
        button{
            width: 20%;
            background-color: #7c7dd7;
            color: white;
            font-size: 14px;
            box-shadow: 0 0 5px white;
        }
    }
</style>
