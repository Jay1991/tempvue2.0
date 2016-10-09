<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        login: {
          username: 'amitavroy@gmail.com',
          password: 'password'
        }
      }
    },

    computed: mapState({
      userStore: state => state.userStore
    }),

    methods: {
      handleLoginSubmit () {
        this.$store.dispatch('doUserLogin', this.login)
          .then(response => {
            console.log('response inside form', response)
            this.$router.push({name: 'dashboard'})
          })
      }
    }
  }
</script>

<template>
  <div id="login-wrapper">
    <div class="row">
      <div class="col-md-5 col-md-push-3">
        <form v-on:submit.prevent="handleLoginSubmit()">
          <div class="form-group">
            <label>Username</label>
            <input
              class="form-control"
              type="text"
              id="username"
              v-model="login.username"
              placeholder="Enter your username"
            >
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              class="form-control"
              type="password"
              id="password"
              v-model="login.password"
              placeholder="Enter your password"
            >
          </div>

          <button class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
