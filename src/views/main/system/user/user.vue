<template>
  <div class="user">
    <div class="search">
      <yj-form v-bind="formConfig"></yj-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import YjForm from '@/base-ui/form'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    YjForm
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
