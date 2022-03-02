// findMusic 页面 api 接口统一管理
import instance from './http'

// banner 轮播图
export const banner = () =>
  instance({
    url: '/banner',
    method: 'GET'
  })
