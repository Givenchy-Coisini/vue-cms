<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="get-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>
<style lang="less" scoped>
.get-code {
  display: flex;
  .get-button {
    margin-left: 8px;
  }
}
</style>
