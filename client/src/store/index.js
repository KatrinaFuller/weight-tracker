import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    challenges: []
  },
  mutations: {
    setChallenges(state, challenges) {
      state.challenges = challenges
    }
  },
  actions: {
    getChallenges({ commit }) {
      api.get('challenges')
        .then(res => {
          commit('setChallenges', res.data)
        })
    }
  }
})
