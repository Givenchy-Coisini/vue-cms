import yjRequest from '../index'
import { IDataType } from './type'
export function getPageListData(url: string, queryInfo: any) {
  return yjRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return yjRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return yjRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function updatePageData(url: string, editData: any) {
  return yjRequest.patch<IDataType>({
    url,
    data: editData
  })
}
