<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      pageName="users"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      pageName="users"
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { formConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
// import { useStore } from '@/store'
// import { usePageSearch } from '@/hooks/usePageSearch'
// import { usePageModal } from '@/hooks/usePageModal'
export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    //动态添加部门和角色列表
    const modalConfigRef = computed(() => {
      // const store = useStore()
      // const departmentItem = modalConfig.formItems.find(
      //   (item) => item.field === 'departmentId'
      // )
      // departmentItem!.options = store.state.entireDepartment.map((item) => {
      //   return { title: item.name, value: item.id }
      // })
      return modalConfig
    })
    // 新增和编辑是否隐藏对应的item
    // const newCallback = () => {
    //   const passwordItem = modalConfig.formItems.find(
    //     // 其实不是realname 是 password
    //     (item) => item.field === 'realname'
    //   )
    //   passwordItem!.isHidden = false
    // }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'realname'
      )
      passwordItem!.isHidden = true
    }

    // 封装hooks
    // const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    // const [pageModalRef, handleEditData, handleNewData,defaultInfo] = usePageModal(newCallback,editCallback)
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryClick = (queryInfo: any) => {
      console.log('正在处理这个方法，看看会不会报错')
      pageContentRef.value?.getPageData(queryInfo)
    }
    const handleNewData = () => {
      defaultInfo.value = {}
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
      }
      // newCallback && newCallback()
    }
    const handleEditData = (item: any) => {
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
      }
      editCallback && editCallback()
    }
    return {
      formConfig,
      contentTableConfig,
      modalConfigRef,
      pageContentRef,
      pageModalRef,
      handleResetClick,
      handleQueryClick,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
