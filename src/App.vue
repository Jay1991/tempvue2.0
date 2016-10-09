<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      this.$store.dispatch('setAuthObj')
    },

    computed: mapState({
      userStore: state => state.userStore
    })
  }
</script>

<template>
  <div>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<style lang="sass">
@import './assets/css/bootstrap-lumen.css'
@import './assets/css/widgets.scss'
@import './assets/css/font-awesome.min.css'
@import './assets/css/ionicons.min.css'
</style>
