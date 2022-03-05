<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="user"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
