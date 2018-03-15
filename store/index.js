import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
  return new Vuex.Store({
    state: {
      types: [],
      cv: [],
      print: [],
      video: []
    },
    actions: {
      LOAD_DATA: function ({ commit }) {
        axios.get(`http://mickeystanley.com/data.json`).then((res) => {
          commit('SET_DATA', { data: res.data })
        }, (err) => {
          console.log(err)
        })
      },
      nuxtServerInit ({ commit }) {
        return axios.get(`http://mickeystanley.com/data.json`)
          .then(res => {
            commit('SET_DATA', { data: res.data })
          })
      }
    },
    mutations: {
      SET_DATA: (state, { data }) => {
        state.types = Object.keys(data).map((key) => ({name: key, uri: '/' + key}))
        state.online = data.online.map((item) => Object.assign({}, item, {uri: item.title.replace(/\s+/g, '-').toLowerCase()}))
        state.print = data.print.map((item) => Object.assign({}, item, {uri: item.title.replace(/\s+/g, '-').toLowerCase()}))
        state.cv = data.cv.map((item) => Object.assign({}, item, {uri: item.title.replace(/\s+/g, '-').toLowerCase()}))
      }
    },
    getters: {
      getItemsByType: (state) => (typeParam) => {
        return state[typeParam]
      }
    },
    modules: {

    }
  })
}

export default store
