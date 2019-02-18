import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: null
  },
  mutations: {
    setSkills (state, data) {
      state.skills = data
    }
  },
  actions: {
    loadSkills ({ state, commit }) {
      import(/* webpackChunkName: 'skills', webpackPrefetch: true */ './skills.json')
        .then(data => commit('setSkills', data.skills))
    }
  }
})
