<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="centerDialogVisible"
      center
      destroy-on-close
      width="30%"
    >
      <yj-form v-bind="modalConfig" v-model="formData"></yj-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button @click="handleConfirmClick" type="primary">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import YjForm from '@/base-ui/form'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    YjForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})
    const store = useStore()
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    const handleConfirmClick = () => {
      centerDialogVisible.value = false
      console.log('queding')
      if (Object.keys(props.defaultInfo).length) {
        store.dispatch('system/updatePageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id
        })
      } else {
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }
    return { formData, centerDialogVisible, handleConfirmClick }
  }
})
</script>

<style scoped></style>
