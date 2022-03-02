// 封装 axios

import router from '@/router'
import axios from 'axios'
// qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库。
// qs.parse()是将URL解析成对象的形式
// qs.stringify()是将对象 序列化成URL的形式，以&进行拼接
import qs from 'qs'

var instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  // 请求超时的时间
  timeout: 5000,
  // 基础路径 发请求的时候 路径中会出现 api
  baseURL: 'http://localhost:3000'
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  // config 配置对象 对象里面有一个属性 headers请求头
  if (localStorage.getItem('Authorization')) {
    // 如果读取到 token 添加到请求头中
    config.headers.Authorization = localStorage.getItem('Authorization')
  }
  return config
},
error => {
  return Promise.reject(error)
})

// 相应拦截器
instance.interceptors.response.use((res) => {
  // 服务器成功的回调函数
  const params = qs.parse(res.config.data)
  const date = new Date()
  // console.group() 方法用于设置分组信息的起始位置，该位置之后的所有信息将写入分组。
  console.group('%cResponse', 'color:darkred')
  // console.log(`%c${params.debug.name}`, 'font-family:"Microsoft Yahei";font-size: 18px;color:#9966CC;');  //暑假活动先注释
  console.log(`%c${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`, 'font-size: 16px;')
  console.log(`%c${res.config.url}`, 'font-size: 20px')
  console.log(res)
  console.log(params)
  console.log(res.data)
  console.groupEnd()
  switch (res.data.message === 'success') {
    case 1:
      console.log(res.data.success.message)
      break
    case 102:
      console.log(res.data.success.message)
      break
    case 103:
      console.log(res.data.success.message)
      break
    case 408:
      // key 失效 重新登录
      console.log('账号验证失败，1秒后转到登陆页面')
      setTimeout(() => {
        router.push({ name: 'Login' })
      }, 1000)
  }
  return res.data
}, (error) => {
  // 相应失败的回调函数
  return Promise.reject(new Error(error))
})

// axios原生的也添加请求拦截,在上传图片时候有用到axios本身
// 请求拦截
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 返回拦截
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})
export default instance
