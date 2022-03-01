// api接口统一管理
import instance from './http'

// 国家编码列表
// /countries/code/list
export const countries = () =>
  // 发请求 返回promise 对象
  // 箭头函数可以去掉函数体+return
  instance({
    url: '/countries/code/list',
    method: 'get'
  })
