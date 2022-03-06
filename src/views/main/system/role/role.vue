<template>
  <div class="role">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
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
