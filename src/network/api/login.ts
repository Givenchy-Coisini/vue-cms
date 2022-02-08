import yjRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/user/login',
  LoginUserInfo = '/user/userInfo',
  UserMenus = '/user/menu'
}
export function accountLoginRequest(account: IAccount) {
  return yjRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfo() {
  return yjRequest.get<IDataType<ILoginResult>>({
    url: LoginApi.LoginUserInfo
  })
}
export function requestUserMenus() {
  return yjRequest.get<IDataType>({
    url: LoginApi.UserMenus
  })
}
