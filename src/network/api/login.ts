import yjRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = './role/'
}
export function accountLoginRequest(account: IAccount) {
  return yjRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return yjRequest.get<IDataType<ILoginResult>>({
    url: LoginApi.LoginUserInfo + id
  })
}
export function requestUserMenusByRoleId(id: number) {
  return yjRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
