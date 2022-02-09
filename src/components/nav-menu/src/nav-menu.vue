<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/images/logo.png" alt="logo" />
      <span class="title">智慧云平台</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#09203f"
      text-color="#ffffff"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <svg class="icon icon-menu" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`"></use>
              </svg>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">{{
                subItem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id">
            <svg class="icon icon-menu" aria-hidden="true">
              <use :xlink:href="`#${item.icon}`"></use>
            </svg>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
      <!-- 36  1h 42min 6-->
      <!-- 37  13min 7-->
      <!-- 38  23min 8-->
      <!-- 39  20min 9-->
      <!-- 40  18min 10-->
      <!-- 41  15min 11-->
      <!-- 42  15min 12-->
      <!-- 43  12min 13-->
      <!-- 44  1h 21min 14-->
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    console.log(userMenus)
    return {
      userMenus
    }
  }
})
</script>
<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60db !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100%-48px);
}
</style>
