import Vue from 'vue'

import {
  loginUrl,
  userUrl
} from './../../config'

import {clientSecret, clientId} from './../../env'

const state = {
  authUser: null
}

const mutations = {
  USER_LOGIN (state, userObj) {
    window.localStorage.setItem('authUser', JSON.stringify(userObj))
    state.authUser = userObj
  }
}

const actions = {
  // User login / authentication function
  doUserLogin: ({commit, state}, loginData) => {
    /* Setting up the Post data */
    const postData = {
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      username: loginData.username,
      password: loginData.password,
      scope: ''
    }

    /* Posting the login object for the user to login */
    return Vue.http.post(loginUrl, JSON.stringify(postData))
      .then(response => {
        /* If user is logged in, get user object */
        const headers = {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + response.body.access_token
        }

        const authUserObj = {
          name: '',
          email: '',
          status: '',
          access_token: response.body.access_token,
          refresh_token: response.body.refresh_token
        }

        return Vue.http.get(userUrl, {headers: headers})
          .then(response => {
            authUserObj.name = response.body.name
            authUserObj.email = response.body.email
            authUserObj.status = response.body.status
            commit('USER_LOGIN', authUserObj)
            return response
          })
      })
  },
  setAuthObj: ({commit}) => {
    const userObj = JSON.parse(window.localStorage.getItem('authUser'))
    commit('USER_LOGIN', userObj)
  }
}

export default {
  state, mutations, actions
}
