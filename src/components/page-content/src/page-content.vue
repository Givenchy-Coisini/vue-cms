<template>
  <div class="page-content">
    <yj-table
      :listData="dataList"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button size="medium" type="primary">新建用户</el-button>
      </template>
      <!-- 列中数据插槽 -->
      <template #status="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.status ? 'success' : 'danger'"
          >{{ scope.row.status ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button size="mini" type="text">编辑</el-button>
          <el-button size="mini" type="text" style="color: red">删除</el-button>
        </div>
      </template>
    </yj-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import YjTable from '@/base-ui/table'
import { useStore } from '@/store'
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    YjTable
  },
  setup(props) {
    const store = useStore()
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        // pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }
    getPageData()
    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    const selectionChange = (val: any) => {
      // 这里可以接受到子组件传过来的数据
      console.log(val)
    }
    return {
      dataList,
      selectionChange,
      getPageData
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
