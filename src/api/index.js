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

// 手机号登录
export const loginPhone = (phone, password) => {
  return instance({
    url: '/login/cellphone',
    method: 'post',
    params: {
      phone,
      password
    }
  })
}

// 账号信息获取 需要 token
export const account = () => {
  return instance({
    url: '/user/account',
    method: 'get'
  })
}
