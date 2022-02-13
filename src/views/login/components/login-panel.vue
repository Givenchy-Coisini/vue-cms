<template>
  <div class="login-panel">
    <h2 class="title">低氮冷凝高效燃气锅炉智慧云平台</h2>
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab" stretch>
      <!-- icon用着有bug -->
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><calendar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><calendar /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
// import { Calendar } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref<string>('account')
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('手机登录 phoneRef调用loginAction')
      }
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      phoneRef,
      currentTab
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 360px;
  .title {
    color: #eee;
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
