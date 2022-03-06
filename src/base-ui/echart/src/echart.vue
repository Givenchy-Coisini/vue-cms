<template>
  <div class="echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '@/hooks/useEchart'
// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  // 使用hooks
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
