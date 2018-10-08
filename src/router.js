import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: Home
    },
    {
      path: '/statistics',
      name: 'home',
      component: Home
    },
    {
      path: '/calendar',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'home',
      component: Home
    },
  ]
})
