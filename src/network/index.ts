// network 统一出口
import YJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const yjRequest = new YJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')
      // 携带token 的拦截
      // const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer${token}`
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})
export default yjRequest
