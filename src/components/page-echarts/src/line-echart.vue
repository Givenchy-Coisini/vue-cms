<template>
  <div class="line-echart">
    <yj-echart :options="options"></yj-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import YjEchart from '@/base-ui/echart'
// const props = defineProps<{
//   xLabels: string[]
//   values:any[]
// }>()
const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      // 数据
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        // 数据
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
})
</script>

<style scoped></style>
