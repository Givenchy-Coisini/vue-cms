<template>
  <div class="nav-header">
    <div class="fold">
      <el-icon @click="handleFoldClick" :size="30">
        <fold v-if="!isFold" />
        <expand v-else />
      </el-icon>
    </div>
    <div class="content">
      <yj-breadcrumb :breadcrumbs="breadcrumbs"></yj-breadcrumb>
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import userInfo from './user-info.vue'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import YjBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    Fold,
    Expand,
    userInfo,
    YjBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, ctx) {
    let isFold = ref(false)
    function handleFoldClick() {
      isFold.value = !isFold.value
      ctx.emit('foldChange', isFold.value)
    }
    // 面包屑数组
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    margin: 0 20px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
