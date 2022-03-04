<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <div class="content">
      <yj-table :listData="userList" :propList="propList">
        <!-- 插槽 -->
        <template #status="scope">
          <el-button
            size="mini"
            plain
            :type="scope.row.status ? 'success' : 'danger'"
            >{{ scope.row.status ? '启用' : '禁用' }}</el-button
          >
        </template>
      </yj-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import YjTable from '@/base-ui/table/index'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    YjTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offest: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100',
        slotName: 'realname'
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '100',
        slotName: 'cellphone'
      },
      {
        prop: 'status',
        label: '状态',
        minWidth: '100',
        slotName: 'status'
      }
    ]
    return {
      formConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
