<template>
  <img src="./assets/logo.png" />
  <div>
    <el-button type="primary">哈哈哈</el-button>
    <el-button type="danger">哈哈哈</el-button>
    <el-button type="danger">哈哈哈</el-button>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
