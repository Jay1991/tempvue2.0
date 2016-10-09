<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      this.fetchData()
    },
    data () {
      return {}
    },
    computed: mapState({
      forumStore: state => state.forumStore
    }),
    methods: {
      fetchData () {
        const forumId = this.$route.params.id
        this.$store.dispatch('getForumById', forumId)
      }
    }
  }
</script>

<template>
  <div class="wrapper" id="forum-detail-wrapper">
    <div class="row">
      <div class="col-md-12">
        <div class="well">
          <h3>{{forumStore.currentForumPost.title}}</h3>
          <p>{{forumStore.currentForumPost.body}}</p>
          <div class="meta">
            <span>Created by <i>{{forumStore.currentForumPost.user.name}}</i></span> on <span>{{forumStore.currentForumPost.created_at}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- row ends -->

    <div class="row">
      <div class="col-md-12">
        <h3>Posts</h3>
        <div class="list-group">
          <router-link
            tag="div"
            :to="{name: 'view-post', params: {pid: post.id, fid: forumStore.currentForumPost.id}}"
            v-for="post in forumStore.currentForumPost.posts"
          >
            <a class="list-group-item">
              <h4 class="list-group-item-heading">{{ post.title }}</h4>
              <p class="list-group-item-text">{{ post.body }}</p>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
