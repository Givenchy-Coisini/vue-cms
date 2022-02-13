<template>
  <div class="nav-header">
    <div class="fold">
      <el-icon @click="handleFoldClick" :size="30">
        <fold v-if="!isFold" />
        <expand v-else />
      </el-icon>
    </div>
    <div class="content">
      <div>面包蟹</div>
      <!-- <navUserInfo></navUserInfo> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Fold,
    Expand
  },
  emits: ['foldChange'],
  setup(props, ctx) {
    let isFold = ref(false)
    function handleFoldClick() {
      isFold.value = !isFold.value
      ctx.emit('foldChange', isFold.value)
    }
    return {
      isFold,
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
