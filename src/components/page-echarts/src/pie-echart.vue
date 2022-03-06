<template>
  <div class="pie-echart">
    <yj-echart :options="options"></yj-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import YjEchart from '@/base-ui/echart'
// import { IDataType } from '../types'
// const props = defineProps<{
//   pieData: IDataType[]
// }>()
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        // data: props.pieData,
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
