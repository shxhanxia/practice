<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/index">index</router-link>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <router-link :to="{path:'test',query:{type:'1'}}">test</router-link>
    <router-link to="/yd">ydui</router-link>
    <router-link to="/calendarApp">calendarApp</router-link>
    <router-link to="/wx">微信接口调用</router-link>
    <router-link to="/velocity">velocity</router-link>
    <router-link to="/Number">Number</router-link>
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a {
    display: inline-block;
    padding: 10px;
    background-color: #fff;
  }
</style>
