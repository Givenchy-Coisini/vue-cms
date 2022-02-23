<template>
  <div class="page-search">
    <yj-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer-btns">
          <el-button>重置</el-button>
          <el-button type="primary">查询</el-button>
        </div>
      </template>
    </yj-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import YjForm from '@/base-ui/form'

export default defineComponent({
  components: {
    YjForm
  },
  props: {
    formConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.footer-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
