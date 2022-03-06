<template>
  <div class="rose-echart">
    <yj-echart :options="options"></yj-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import YjEchart from '@/base-ui/echart'
// import { IDataType } from '../types'
// const props = defineProps<{
//   roseData: IDataType[]
// }>()
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7']
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: {
      name: 'Radius Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['25%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' }
      ]
    }
  }
})
</script>

<style scoped></style>
