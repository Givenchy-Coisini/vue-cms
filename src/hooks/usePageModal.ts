import PageModal from '@/components/page-modal'
import { ref } from 'vue'

export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    console.log('xxx')
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
  }
  return [handleEditData, handleNewData, pageModalRef]
}
