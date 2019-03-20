import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: null,
    showEffects: true
  },
  mutations: {
    setSkills (state, data) {
      state.skills = data
    },
    setEffects (state, data) {
      state.showEffects = data
    }
  },
  actions: {
    loadSkills ({ state, commit }) {
      if (state.skills) return
      import(/* webpackChunkName: 'skills', webpackPrefetch: true */ './skills.json')
        .then(data => commit('setSkills', data.skills))
    },
    switchEffects ({ commit }, payload) {
      commit('setEffects', payload)
      Vue.cookies.set('vfx', payload)
    }
  }
})
