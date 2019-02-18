import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/frontend',
      alias: '/',
      name: 'frontend',
      component: () => import( /* webpackChunkName: 'a' */ './views/Frontend.vue')
    },
    {
      path: '/motion',
      name: 'motion',
      component: () => import( /* webpackChunkName: 'b' */ './views/Motion.vue')
    },
    {
      path: '/minimalism',
      name: 'minimalism',
      component: () => import( /* webpackChunkName: 'b' */ './views/Minimalism.vue')
    },
    {
      path: '**',
      redirect: '/frontend'
    },
  ]
})
