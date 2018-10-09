import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EmptyPage from './views/EmptyPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/workflow',
      name: 'home',
      component: EmptyPage
    },
    {
      path: '/statistics',
      name: 'home',
      component: EmptyPage
    },
    {
      path: '/calendar',
      name: 'home',
      component: EmptyPage
    },
    {
      path: '/users',
      name: 'home',
      component: EmptyPage
    },
    {
      path: '/settings',
      name: 'home',
      component: EmptyPage
    },
  ]
})
