<template>
  <main>
    <p>
      Hello, I'm
      <b>Ilya</b>
      <b>Vasilyev</b>,
      <b>front-end developer</b>,
      and this is my personal page, stuffed to the gills with highly annoying, CPU intensive and absolutely unnecesary visual effects.
      I've created them just because I can.
      And you can
      <button
        class="inline"
        @click="$store.dispatch('switchEffects', !$store.state.showEffects)"
      >
        turn them {{ $store.state.showEffects ? 'OFF' : 'ON' }}
      </button>
      anytime.
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

    <hr>

    <h2>Skills</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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

    <h2>Timeline</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="timeline-container">
      <Timeline v-if="showTimeline" />
    </div>

    <hr>

    <h2>This site</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
