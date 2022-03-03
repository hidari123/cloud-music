// import Vue from 'vue'
// import Vuex from 'vuex'

// import specimen from './modules/specimen'

// Vue.use(Vuex)

// const state = {}

// const getters = {}

// const mutations = {}

// const actions = {}

// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
//   modules: {
//     specimen // specimen模块命名为specimen，要在specimen.js声明namespaced: true才有用
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    currentId: null
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization
      localStorage.setItem('Authorization', user.Authorization)
    }
  }
})

export default store
