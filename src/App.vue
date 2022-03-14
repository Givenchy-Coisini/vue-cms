<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style lang="less">
// 设置全局app样式
.app {
  height: 100%;
}
</style>
