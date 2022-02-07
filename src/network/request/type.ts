import type { AxiosRequestConfig } from 'axios'

export interface YJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}
export interface YJRequestConfig extends AxiosRequestConfig {
  interceptors?: YJRequestInterceptors
  showLoading?: boolean
}
