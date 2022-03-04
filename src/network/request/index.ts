import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { YJRequestInterceptors, YJRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
// axios -> axios 实例

const DEAFULT_LOADING = true
class YJRequest {
  instance: AxiosInstance
  interceptors?: YJRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  // 如果开发中有多个axios 实例的话 可以多个new YJRequest
  //  每次new 都会create一个新的axios实例
  // 从config中取出的拦截器是对应的实例的拦截器
  constructor(config: YJRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器:请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器:请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器:响应成功拦截')
        // 将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        const data = res.data
        return data
        // if (data.retrunCode === '-1001') {
        //   console.log('请求失败~,错误信息')
        // } else {
        //   return data
        // }
      },
      (err) => {
        console.log('所有的实例都有的拦截器:响应失败拦截')
        // 将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        // 例子:判断不同的状态码
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }
  request<T = any>(config: YJRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      // this.instance 是创建出来的实例 实例里面本身就有request方法
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)
          // 将showLoading设置为true 这样不会影响下次请求
          this.showLoading = DEAFULT_LOADING
          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T = any>(config: YJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: YJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: YJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: YJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default YJRequest
