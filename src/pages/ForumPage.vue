<script>
  export default {
    created () {
      this.$store.dispatch('getForums')
        .then(response => {
          console.log(response)
        })
    },

    data () {
      return {
        transitionName: 'animated slideInLeft'
      }
    },

    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'animated slideInLeft' : 'animated slideInRight'
      }
    }
  }
</script>

<template>
  <div class="wrapper" id="forum-wrapper">
    <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
    <section class="content-header">
      <h1>Forum <small>Place to discuss and discover</small></h1>
    </section>

    <section class="content">
      <div class="row">
        <div class="col-md-8">
          <transition
            name="custom-classes-transition"
            :enter-active-class="transitionName"
            leave-active-class="hide"
          >
            <router-view></router-view>
          </transition>
        </div>
        <div class="col-md-4">
          Sidebar
        </div>
      </div>
    </section>
  </div>
</template>
