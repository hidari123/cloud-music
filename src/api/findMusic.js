// findMusic 页面 api 接口统一管理
import instance from './http'

// banner 轮播图
export const banner = () =>
  instance({
    url: '/banner',
    method: 'GET'
  })

// 歌单分类
export const catlist = () =>
  instance({
    url: '/playlist/catlist',
    method: 'GET'
  })

// 热门歌单分类
export const hot = () =>
  instance({
    url: '/playlist/hot',
    method: 'GET'
  })

// 歌单(网友精选碟)
export const playlist = (pramas) => {
  return instance({
    url: '/top/playlist',
    method: 'GET',
    pramas
  })
}

// 精品歌单标签列表
export const highquality = () =>
  instance({
    url: '/playlist/highquality/tags',
    method: 'GET'
  })

// 获取精品歌单
export const top = (pramas) => {
  return instance({
    url: '/top/playlist/highquality',
    method: 'GET',
    pramas
  })
}
