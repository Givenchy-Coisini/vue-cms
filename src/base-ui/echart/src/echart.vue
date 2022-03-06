<template>
  <div class="echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '@/hooks/useEchart'
// 定义props
const props = withDefaults(
  defineProps<{
    option: EChartsOption
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
  setOptions(props.option)
})
</script>

<style scoped></style>
