import PageContent from '@/components/page-content'
import { ref } from 'vue'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    console.log('正在处理这个方法，看看会不会报错')
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [handleQueryClick, handleResetClick, pageContentRef]
}
