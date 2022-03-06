<template>
  <div class="line-echart">
    <yj-echart :options="options"></yj-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import * as echarts from 'echarts'
import YjEchart from '@/base-ui/echart'
// const props = defineProps<{
//   xLabels: string[]
//   values:any[]
// }>()
const options = computed(() => {
  return {
    xAxis: {
      // props.xLabels
      data: [
        '点',
        '击',
        '柱',
        '子',
        '或',
        '者',
        '两',
        '指',
        '在',
        '触',
        '屏',
        '上',
        '滑',
        '动',
        '能',
        '够',
        '自',
        '动',
        '缩',
        '放'
      ],
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        // props.values
        data: [
          220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122,
          133, 334, 198, 123, 125, 220
        ]
      }
    ]
  }
})
</script>

<style scoped></style>
