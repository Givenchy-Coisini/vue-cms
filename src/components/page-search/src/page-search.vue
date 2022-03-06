<template>
  <div class="page-search">
    <yj-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">查询</el-button>
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
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件中的field来决定的
    const formItems = props.formConfig?.formItems ?? []
    const formOriginData: any = []
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    // 重置
    const handleResetClick = () => {
      // 视频10 双向绑定处理42min之前
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
      // formData.value = fromOriginData
    }
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
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
