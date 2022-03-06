<template>
  <div>
    <el-dropdown>
      <div class="userInfo">
        <el-avatar :size="35" :src="userAvatar"></el-avatar>
        <div class="userName">{{ userName }}</div>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>刷新数据</el-dropdown-item>
          <el-dropdown-item divided @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    let userName = computed(() => {
      return store.state.login.userInfo.name
    })
    let userAvatar = computed(() => {
      return store.state.login.userInfo.avatar
    })
    const handleExitClick = () => {
      LocalCache.deleteCache('token')
      router.push('/main')
    }
    return { userName, userAvatar, handleExitClick }
  }
})
</script>

<style scoped lang="less">
.userInfo {
  cursor: pointer;
  display: flex;
  align-items: center;
  .userName {
    font-size: 15px;
    margin-left: 5px;
  }
}
</style>
