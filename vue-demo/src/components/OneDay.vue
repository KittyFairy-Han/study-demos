<template>
    <div class="day-todo">
        <div class="half-day"><input v-model="morningClass"/></div>
        <div v-show="(todayClass.morning!==todayClass.afternoon)||(!todayClass.afternoon)" class="half-day"><input v-model="afternoonClass"/></div>
    </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {
      todayClass:{
        type:Object,
        default:()=>{ return {}}
      }
    },
    data() {
      return {
        morningClass:'',
        afternoonClass:''
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {},
    watch: {
      morningClass(newVal){
        //console.log('mor')
        this.$emit('morningChange',{
          day:this.todayClass.day,
          morning:newVal
        })
      },
      afternoonClass(newVal){
        //console.log('aft')
        this.$emit('afternoonChange',{
          day:this.todayClass.day,
          afternoon:newVal
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    .day-todo{
        width: 80%;
        margin-left: 20%;
        overflow: hidden;
        display: flex;
        height: 4rem;
        .half-day{
            width: 50%;
            background-color: bisque;
            text-align: center;
            flex-grow: 1;
            border-right: 2px #e09051 solid;
            line-height: 4rem;
            input{
                width: 100%;
                height: 100%;
                background-color: inherit;
                border: 0;
                text-align: center;
                font-size: 1.5rem;
            }
        }
    }
</style>
