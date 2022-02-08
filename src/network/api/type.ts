export interface IAccount {
  username: string
  passwd: string
}

export interface ILoginResult {
  // id: number
  // name: string
  accessToken: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
