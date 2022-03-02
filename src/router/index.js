import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FindMusic from '../views/find-music/FindMusic.vue'
import MusicMan from '../views/music-man/musicMan.vue'
import MyMusic from '../views/my-music/myMusic.vue'
import Focus from '../views/focus/Focus.vue'
import Tourist from '../views/tourist/tourist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 默认是 FindMusic 页面
    redirect: '/findmusic',
    children: [
      {
        path: '/findmusic',
        name: 'FindMusic',
        component: FindMusic
      },
      {
        path: '/musicman',
        name: 'MusicMan',
        component: MusicMan
      },
      {
        path: '/mymusic',
        name: 'MyMusic',
        component: MyMusic
      },
      {
        path: '/focus',
        name: 'Focus',
        component: Focus
      },
      {
        path: '/tourist',
        name: 'Tourist',
        component: Tourist
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个导航守卫 判断用户是否登录
router.beforeEach((to, from, next) => {
  // 读取本地 token
  const token = localStorage.getItem('Authorization')
  if (to.path === '/findmusic' || to.path === '/musicman' || to.path === '/tourist') {
    next()
  } else {
    if (token === null || token === '') {
      router.push('/tourist').catch(() => {})
    } else {
      next()
    }
  }
})

export default router
