<template>
  <!-- 面包屑暂时有些问题 -->
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <yj-card title="分类商品数量(饼图)">
          <!-- <pie-echart :pieData="categoryGoodsCount"></pie-echart> -->
          <pie-echart :pieData="[]"></pie-echart>
        </yj-card>
      </el-col>
      <el-col :span="10">
        <yj-card title="不同城市商品销量">
          <!-- 地图echart暂且不写 -->
          <line-echart :lineData="[]"></line-echart>
        </yj-card>
      </el-col>
      <el-col :span="7">
        <yj-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="[]"></rose-echart>
        </yj-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <yj-card title="分类商品的销量">
          <!-- <line-echart v-bind="categoryGoodsSale"></line-echart> -->
          <line-echart :lineData="[]"></line-echart>
        </yj-card>
      </el-col>
      <el-col :span="12">
        <yj-card title="分类商品的收藏">
          <!-- <bar-echart v-bind="categoryGoodsSFavor"></bar-echart> -->
          <bar-echart :BarData="[]"></bar-echart>
        </yj-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
// import { useStore } from '@/store'
import YjCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart
} from '@/components/page-echarts'
export default defineComponent({
  name: 'dashboard',
  components: {
    YjCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart
  },
  setup() {
    // const store = useStore()
    // store.dispatch('dashboard/getDashboardDataAction')
    // 请求数据
    // const categoryGoodsCount = computed(() => {
    //   return store.state.dashbord.categoryGoodsCount.map((item) => {
    //     return { name: item.name, value: item.goodsCount }
    //   })
    // })
    // const categoryGoodsSale = computed(() => {
    //   const xLabels: string[] = []
    //   const values: any[] = []
    //   const categoryGoodsSale = store.state.dashbord.categoryGoodsSale
    //   for(const item of categoryGoodsSale) {
    //     xLabels.push(item.name)
    //     values.push(item.goodsCount)
    //   }
    //   return {xLabels,values}
    // const categoryGoodsFavor = computed(() => {
    //   const xLabels: string[] = []
    //   const values: any[] = []
    //   const categoryGoodsFavor = store.state.dashbord.categoryGoodsFavor
    //   for(const item of categoryGoodsFavor) {
    //     xLabels.push(item.name)
    //     values.push(item.goodsFavor)
    //   }
    //   return {xLabels,values}
    // }
    // return { categoryGoodsCount,categoryGoodsSale,categoryGoodsFavor}
    return {}
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
