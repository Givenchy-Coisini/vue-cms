import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YJRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface YJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YJRequestInterceptors<T>
  showLoading?: boolean
}
