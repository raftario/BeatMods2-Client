import NotFound from '@/views/NotFound.vue'
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ModList from './views/ModList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mods',
      name: 'mods',
      component: ModList
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
