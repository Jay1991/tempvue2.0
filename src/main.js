import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

import App from './App'
import TopMenu from './components/widgets/TopMenu'
import Forum from './components/forum/Forum'
import ForumDetail from './components/forum/ForumDetail'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ForumPage from './pages/ForumPage'

Vue.component('app', App)
Vue.component('top-menu', TopMenu)

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', component: Home, name: 'login'},
  {path: '/dashboard', component: Dashboard, name: 'dashboard'},
  {
    path: '/forum',
    component: ForumPage,
    name: 'forum',
    children: [
      {
        path: '',
        name: 'forum-list',
        component: Forum
      },
      {
        path: 'view/:id',
        name: 'forum-detail',
        component: ForumDetail
      },
      {
        path: 'view/:fid/post/:pid',
        name: 'view-post',
        component: ForumDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.name !== 'login') {
    const authUser = window.localStorage.getItem('authUser')
    if (authUser) {
      next()
    } else {
      next({name: 'login'})
    }
  }
  next()
})

new Vue({
  router, store
}).$mount('#app')
