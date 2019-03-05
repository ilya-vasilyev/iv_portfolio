<template>
  <main>
    <p>
      Hello, I'm
      <b>Ilya</b>
      <b>Vasilyev</b>,
      <b>front-end web developer</b>,
      specialised in
      <b>
        Vue.js
      </b>
      , visualization, animation and interactivity.
    </p>

    <p>
      And this is my personal portfolio website, stuffed to the gills with highly annoying, CPU intensive and absolutely unnecesary visual effects.
      I've created them just because I can.
      And you can
      <button
        class="inline"
        @click="$store.dispatch('switchEffects', !$store.state.showEffects)"
      >
        turn them {{ $store.state.showEffects ? 'OFF' : 'ON' }}
      </button>
      anytime.
      This whole project exists only to demonstrate my skills and abilities in web development.
      Here you would know almost everything about me – I can't see any other reasons how you ended up on this page and why you're reading this.
      If you want to dig deeper see
      <a
        href="https://github.com/ilya-vasilyev/iv_portfolio"
        target="_blank"
      >source code on Github</a>.
    </p>
    <img
      v-show="tldrImage"
      :src="tldrImageSrc"
      class="tldr-image"
    >
    <div>
      <button
        v-if="!tldrImage"
        class="prime"
        @click="tldrImage = true"
      >
        TL;DR
      </button>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <hr>

    <h2>Toolkit</h2>
    <p>You're probably intereseted <i>(why shouldn't you be?)</i> in my skills end experience in web development.</p>
    <p>In case you're too lazy to appreciate my data visualization efforts, here is the point: <b>Vue</b>, no <i>React</i>, disgraceful <i>AngularJS</i> </p>

    <h5>View as:</h5>
    <div class="skill-controls">
      <button
        :active="viewMode === 'chart'"
        class="prime"
        @click="loadSkillComponent('chart')"
      >
        <b>CHART</b>
      </button>
      <button
        :active="viewMode === 'table'"
        class="prime"
        @click="loadSkillComponent('table')"
      >
        <b>TABLE</b>
      </button>
      <button
        :active="viewMode === 'raw'"
        class="prime"
        @click="loadSkillComponent('raw')"
      >
        <b>JSON</b>
      </button>
    </div>

    <Chart
      v-if="isSkillComponentLoaded.chart"
      v-show="viewMode === 'chart'"
      class="skills"
    />

    <Table
      v-if="isSkillComponentLoaded.table"
      v-show="viewMode === 'table'"
      class="skills"
    />

    <Raw
      v-if="isSkillComponentLoaded.raw"
      v-show="viewMode === 'raw'"
      class="skills"
    />

    <noscript>
      Can't show with JavaScript turned off
    </noscript>

    <hr>

    <h2>JAMstack</h2>
    <p>
      I have to say that I really like the idea of JAMstack.
      Today frontend is as powerfull as ever and we need to utilize this.
      Back-end logic for most projects is the same and can be reused, so why don't just plug it in?
      Don't get me wrong, back-end is great if it's available on demand, as a service<br>
      <ul>
        <li>Firebase</li>
        <li>Netlify</li>
        <li>Serverless</li>
        <li>Fn project</li>
      </ul>
    </p>

    <hr>

    <h2>Timeline</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="timeline-container">
      <Timeline v-if="showTimeline" />
    </div>

    <hr>

    <h2>This site</h2>
    <p>
      <b>Design</b>
      – well, I design on the go
    </p>
    <p>
      <b>Vue</b>
      – (or Nuxt)
    </p>
    <p>
      <b>Billboard</b>
      – ...
    </p>
    <p>
      <b>Tabulator</b>
      – ...
    </p>
    <p>
      <b>Anime</b>
      – ...
    </p>
    <p>
      <b>CSS grids</b>
      – althoug I prefer flexbox...
    </p>
    <p>
      <b>SEO</b>
      – ...
    </p>
    <p>
      <b>Webpack</b>
      – it was the first time I set up webpack completeley from ground up, with pre-rendering, dynamic import of components, the results in development mode is petty messy:
      <ul>
        <li>hot reload is not working on styles in .vue components</li>
        <li>refreshing on any page extept "/" results in pre-rendered html</li>
      </ul>
      but come on, it works. You can examine Bundle Analyzer report
      <a
        href="./report.html"
        target="_blank"
      >here</a>.
    </p>
    <p>
      <b>Netlify</b>
      – ...
    </p>
  </main>
</template>

<script>
import LoadingComponent from '@/components/Loading.vue'
import ErrorComponent from '@/components/Error.vue'

export default {
  name: 'Frontend',
  components: {
    Chart: () => ({
      component: import(/* webpackChunkName: 'chart', webpackPrefetch: true */ '@/components/Chart.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    }),
    Table: () => ({
      component: import(/* webpackChunkName: 'table', webpackPrefetch: true */ '@/components/Table.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    }),
    Raw: () => ({
      component: import(/* webpackChunkName: 'raw', webpackPrefetch: true */ '@/components/Raw.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    }),
    Timeline: () => ({
      component: import(/* webpackChunkName: 'timeline', webpackPrefetch: true */ '@/components/Timeline.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    })
  },
  data  () {
    return {
      tldrImage: false,
      tldrImageSrc: '',
      viewMode: 'chart',
      isSkillComponentLoaded: { chart: false, table: false, raw: false },
      showTimeline: false
    }
  },
  metaInfo () {
    return {
      title: 'frontend'
    }
  },
  mounted () {
    this.loadSkillComponent('chart')
    window.addEventListener('scroll', this.loadTimeline)
    setTimeout(() => { this.tldrImageSrc = '../assets/images/peacock.gif' }, 1000)
  },
  methods: {
    hideSkills (callback) {
      this.$anime({
        targets: '.skills',
        translateY: 50,
        opacity: 0,
        filter: this.$store.state.showEffects ? 'blur(5px)' : false,
        duration: 200,
        easing: 'easeInSine',
        complete: callback
      })
    },
    showSkills () {
      this.$anime({
        targets: '.skills',
        translateY: -50,
        duration: 0
      })
      this.$anime({
        targets: '.skills',
        translateY: 0,
        opacity: 1,
        filter: this.$store.state.showEffects ? 'blur(0px)' : false,
        duration: 300,
        easing: 'easeOutBack'
      })
    },
    loadSkillComponent (type) {
      this.hideSkills(() => {
        this.$store.dispatch('loadSkills').then(() => {
          this.isSkillComponentLoaded[type] = true
          this.viewMode = type
          this.showSkills()
        })
      })
    },
    loadTimeline (e) {
      let timeline = document.querySelector('.timeline-container').getBoundingClientRect().top
      if (timeline - window.innerHeight < 0) {
        this.showTimeline = true
        window.removeEventListener('scroll', this.loadTimeline)
      }
    }
  }
}
</script>

<style lang="scss">

.skill-controls {
  margin: 0 auto 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.tldr-image {
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
}

</style>
