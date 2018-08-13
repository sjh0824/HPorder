import Vue from 'vue'
import Vuex from 'vuex'

import board from './modules/board'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    board: {  
      namespaced: true,
      ...board
    },
  }
})

export default store