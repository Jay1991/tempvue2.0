import Vue from 'vue'

import {
  forumGetAll,
  getHeader,
  forumDetails
} from './../../config'

const state = {
  forumPosts: [],
  currentForumPost: {
    user: {
      name: ''
    }
  }
}

const mutations = {
  GET_FORUMS (state, forums) {
    state.forumPosts = forums
  },
  SET_CURRENT_FORUM (state, currentForumPost) {
    state.currentForumPost = currentForumPost
  }
}

const actions = {
  getForums: ({commit}) => {
    return Vue.http.get(forumGetAll, {headers: getHeader()})
      .then(response => {
        commit('GET_FORUMS', response.data.data)
        return response
      })
  },
  getForumById: ({commit}, id) => {
    const url = forumDetails + id
    return Vue.http.get(url, {headers: getHeader()})
      .then(response => {
        commit('SET_CURRENT_FORUM', response.data.data)
        return response
      })
  }
}

export default {
  state, mutations, actions
}
