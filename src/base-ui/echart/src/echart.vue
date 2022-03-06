<template>
  <div class="echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

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
  const echartInstance = echarts.init(echartDivRef.value!)
  echartInstance.setOption(props.option)
})
</script>

<style scoped></style>
