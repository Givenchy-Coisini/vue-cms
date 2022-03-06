<template>
  <div class="role">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      pageName="role"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      pageName="role"
      ref="pageModalRef"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        ></el-tree>
      </div>
      <!-- 42  1h 50min 12   3h 06  jibenkaifawanbi-->
      <!-- 43  20min 13   3h 07  echats-->
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import { menuMapLeafKeys } from '@/utils/map-menus'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { ElTree } from 'element-plus'
import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { useStore } from '@/store'
export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore()
    const otherInfo = ref({})
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const menus = computed(() => store.state.entireMenu)
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'intro'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = (item: any) => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'intro'
      )
      passwordItem!.isHidden = true
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryClick = (queryInfo: any) => {
      console.log('正在处理这个方法，看看会不会报错')
      pageContentRef.value?.getPageData(queryInfo)
    }
    const handleNewData = () => {
      defaultInfo.value = {}
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
      }
      newCallback && newCallback()
    }
    const handleEditData = (item: any) => {
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
      }
      editCallback && editCallback(item)
    }
    // 拿到el-tree 勾选的数据
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckKeys = data2.halfCheckKeys
      const menuList = [...checkedKeys, ...halfCheckKeys]
      otherInfo.value = { menuList }
    }
    return {
      menus,
      otherInfo,
      formConfig,
      contentTableConfig,
      modalConfig,
      elTreeRef,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleResetClick,
      handleQueryClick,
      handleNewData,
      handleEditData,
      handleCheckChange
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
