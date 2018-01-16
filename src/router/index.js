import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Config from '@/components/Config'
import Nav from '@/components/Nav'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import GoBack from '@/components/GoBack'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All',
      components: {
        a: Hello,
        b: Config,
        c: Nav,

        y: Contact,
        z: Footer
      },
    },
    {
      path: '/hello',
      name: 'Hello',
      components: {
        a: Hello,
        z: GoBack
      },
    },
    {
      path: '/Config',
      name: 'Config',
      components: {
        a: Config,
        z: GoBack
      },
    },
    {
      path: '/skills',
      name: 'Skills',
      components: {
        a: Skills,
        z: GoBack
      },
    },
    {
      path: '/experience',
      name: 'Experience',
      components: {
        a: Experience,
        z: GoBack
      },
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      components: {
        a: Portfolio,
        z: GoBack
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      components: {
        a: Contact,
        z: GoBack
      },
    },
  ]
})
