<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
