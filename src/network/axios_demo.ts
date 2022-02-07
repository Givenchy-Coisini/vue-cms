import axios from 'axios'
// axios的实例对象
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
//   console.log(process.env.NODE_ENV)
// })
// promise 本身是可以有类型的

// axios的拦截器
// fn1 请求发送成功会执行的函数
// fn2 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想要做的 一些操作
    // 给请求添加token
    // isLoading 动画
    return config
  },
  (err) => {
    console.log(err)
  }
)

// 响应拦截
// fn1 数据响应成功(服务器正常的返回了数据)
// fn2 数据响应不成功(服务器返回数据异常)
axios.interceptors.response.use(
  (res) => {
    console.log(res)
    return res
  },
  (err) => {
    console.log(err)
  }
)
