<template>
  <div class="page-content">
    <yj-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
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
      <!-- <template #imgUrl="scope">
        <el-image
          :src="scope.row.imgUrl"
          style="width: 60px; height: 60px"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template> -->
      <!-- 动态获取剩余插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </yj-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import YjTable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'
import { useStore } from '@/store'
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    YjTable
  },
  setup(props) {
    const store = useStore()
    // isCreate 导出 在新建用户按钮处v-if判断
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    // 获取操作权限

    // 双向绑定pageInfo
    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10
    })
    watch(pageInfo, () => getPageData())
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      // if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        // pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()
    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    const selectionChange = (val: any) => {
      // 这里可以接受到子组件传过来的数据
      console.log(val)
    }
    // 获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )
    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
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
