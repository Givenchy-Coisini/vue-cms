<template>
  <!-- 面包屑暂时有些问题 -->
  <!-- 43  43min 3h 07  echats-->
  <div class="dashboard">
    <h2>dashboard</h2>
    <div ref="divRef" style="width: 600px; height: 500px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import * as echarts from 'echarts'
export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    onMounted(() => {
      // 初始化echarts实例
      const echartInstance = echarts.init(divRef.value!) // 第二个参数是主题:light/dark
      // 第三个参数是options : {renderer'svg'}
      // 编写配置文件
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 设置配置，开始绘制
      echartInstance.setOption(option)
    })
    return { divRef }
  }
})
</script>

<style scoped></style>
