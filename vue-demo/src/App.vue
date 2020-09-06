<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <router-view/>
    </div>
</template>

<script>
    import MHeader from './components/m-header.vue'
    import Tab from './components/tab.vue'
    export default {
        name: 'app',
        components: {
            MHeader,
            Tab
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body{
        margin: 0;
    }
    section,div,ul,li,h1,h2,h3{
        margin: 0;
        padding: 0;
    }
    ul{
       list-style: none;
    }
    button{
        border: none;
    }
</style>
