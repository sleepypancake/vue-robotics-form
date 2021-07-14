import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    users: []
  },
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios.get('http://localhost:3000/users')
        .then((response) => {
          // handle success
          commit('SET_USERS_TO_VUEX', response.data)
        })
        .catch( (response) => {
          //handle error
          console.log(response);
        })
    },
    POST_USERS_TO_API({commit}, data) {
      return axios.post('http://localhost:3000/users', data)
        .then((response) => {
          commit('ADD_USERS_TO_VUEX', response.data)
        })
        .catch( (response) => {
          //handle error
          console.log(response);
        })
    }
  },
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users
    },
    ADD_USERS_TO_VUEX: (state, user) => {
      state.users.push(user)
    }
  },
  getters: {
    USERS(state) {
      return state.users;
    }
  }
})
