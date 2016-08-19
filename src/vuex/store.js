import Vue from 'vue'
import Vuex from 'vuex'

import { VALIDATE_FORM, SET_CURRENT_USER } from './mutatin-types'

Vue.use(Vuex)

const state = {
  currentUser: null,
  formIsValid: false
}

const mutations = {
  [VALIDATE_FORM](state, flag) {
    state.formIsValid = flag
  },

  [SET_CURRENT_USER](state, user) {
    state.currentUser = user
  }
}

export default new Vuex.Store({
  state,
  mutations
})
