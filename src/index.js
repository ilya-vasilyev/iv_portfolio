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

Vue.config.productionTip = false

Vue.use(Meta)
Vue.use(VueAnime)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
