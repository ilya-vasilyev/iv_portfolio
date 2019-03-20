import './assets/critical.scss'
import 'es6-promise/auto'
import 'polyfill-array-includes'
import './helpers/polyfill-object-entries'
import Vue from 'vue'
import Meta from 'vue-meta'
import router from './router'
import store from './store'
import VueAnime from './plugins/vue-anime'
import App from './App.vue'
import './helpers/register-sw'
import VueAnalytics from 'vue-analytics'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(Meta)
Vue.use(VueAnime)
Vue.use(VueAnalytics, {
  id: 'UA-136575581-1',
  router
})
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
