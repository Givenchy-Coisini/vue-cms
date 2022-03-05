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
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

// import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    // 封装hooks
    // const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryClick = (queryInfo: any) => {
      console.log('正在处理这个方法，看看会不会报错')
      pageContentRef.value?.getPageData(queryInfo)
    }
    return {
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
