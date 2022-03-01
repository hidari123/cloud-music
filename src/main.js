import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/commen.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import instance from '@/api/http'
// 把 instance 挂载到 Vue 实例上
Vue.prototype.$http = instance
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
