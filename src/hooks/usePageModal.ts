import PageModal from '@/components/page-modal'
import { ref } from 'vue'
type CallbackFn = () => void
export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    editCb && editCb()
  }
  return [handleEditData, handleNewData, pageModalRef]
}
