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
      component: () => import(/* webpackChunkName: 'frontend' */ '@/views/Frontend.vue')
    },
    {
      path: '/motion',
      name: 'motion',
      component: () => import(/* webpackChunkName: 'motion' */ '@/views/Motion.vue')
    },
    {
      path: '/minimalism',
      name: 'minimalism',
      component: () => import(/* webpackChunkName: 'minimalism' */ '@/views/Minimalism.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import(/* webpackChunkName: 'cv' */ '@/views/Cv.vue')
    },
    {
      path: '**',
      redirect: '/frontend'
    }
  ]
})
