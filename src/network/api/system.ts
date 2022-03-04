import yjRequest from '../index'
import { IDataType } from './type'
export function getPageListData(url: string, queryInfo: any) {
  return yjRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
