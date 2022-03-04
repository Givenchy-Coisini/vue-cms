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
import { useStore } from 'vuex'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offest: 0,
        size: 10
      }
    })
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
