import anime from 'animejs'

export default {
  install (Vue, options) {
    Vue.prototype.$anime = anime
  }
}
