<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      forumStore: state => state.forumStore
    })
  }
</script>
<template>
  <div class="wrapper" id="forum-wrapper">
    <div class="box box-primary">
      <div class="box-header with-border">
        <h3 class="box-title">Latest forums</h3>
      </div>
      <!-- /.box-header -->
      <div class="box-body no-padding">
        <div v-for="forum in forumStore.forumPosts">
          <router-link :to="{name: 'forum-detail', params: {id: forum.id}}" class="forum-title">
            <h2 class="forum-title">{{forum.title}} <small>Posts: {{forum.posts.length}}</small></h2>
          </router-link>
          <p>{{forum.body}}</p>
          <div class="meta">
            <span>Created by <i>{{ forum.user.name }}</i></span>
          </div>
        </div>
      </div>
      <!-- /.box-body -->
    </div>
  </div>
</template>

<style lang="scss">
  a.forum-title:hover {
    text-decoration: none;
  }
</style>
