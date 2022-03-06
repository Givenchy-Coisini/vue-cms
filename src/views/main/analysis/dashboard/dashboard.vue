<template>
  <!-- 面包屑暂时有些问题 -->
  <!-- 43  1h 35min 3h 07  echats-->
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <yj-card title="分类商品数量(饼图)">
          <yj-echart :option="option"></yj-echart>
        </yj-card>
      </el-col>
      <el-col :span="10">
        <yj-card title="不同城市商品销量"></yj-card>
      </el-col>
      <el-col :span="7">
        <yj-card title="分类商品数量(玫瑰图)"></yj-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <yj-card title="分类商品的销量"></yj-card>
      </el-col>
      <el-col :span="12">
        <yj-card title="分类商品的收藏"></yj-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'
import YjCard from '@/base-ui/card'
import YjEchart from '@/base-ui/echart'
export default defineComponent({
  name: 'dashboard',
  components: {
    YjCard,
    YjEchart
  },
  setup() {
    // const store = useStore()
    // store.dispatch('dashboard/getDashboardDataAction')
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
    return { option }
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
