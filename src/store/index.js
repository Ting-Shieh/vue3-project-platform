import { createStore } from 'vuex'
import getters from './getters.js'
import app from './modules/app.js'
export default createStore({
  state: {
  },
  getters,
  mutations: {},
  actions: {
  },
  modules: {
    app
  }
})
