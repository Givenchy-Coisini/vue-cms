<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="centerDialogVisible"
      center
      width="30%"
    >
      <yj-form v-bind="modalConfig" v-model="formData"></yj-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button @click="centerDialogVisible = false" type="primary"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
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
    modalConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const centerDialogVisible = ref(true)
    const formData = ref({})
    return { formData, centerDialogVisible }
  }
})
</script>

<style scoped></style>
