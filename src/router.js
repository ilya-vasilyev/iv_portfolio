import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'A',
      // eslint-disable-next-line
      component: () => import( /* webpackChunkName: 'a' */ './views/A.vue')
    },
    {
      path: '/b',
      name: 'B',
      component: () => import( /* webpackChunkName: 'b' */ './views/B.vue')
    }
  ]
})
