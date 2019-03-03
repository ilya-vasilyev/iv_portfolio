<template>
  <main>
    <p>Hi, I'm 
      <span>Ilya</span>
      <span>Vasilyev</span>, 
      <span>front-end developer</span>, 
      this is my personal page, stuffed to the gills with highly annoying, CPU intensive and absolutely unnecesary visual effects.
      I've created them just because I can. 
      And you can 
      <button
        @click="$store.dispatch('switchEffects', !$store.state.showEffects)"
        class="inline">turn them {{$store.state.showEffects ? 'OFF' : 'ON'}}</button> 
      anytime.

    </p>
    <img
      v-show="tldrImage"
      src="../assets/images/peacock.gif"
      alt=""
      class="tldr-image"
    >
    <div>
      <button v-if="!tldrImage" @click="tldrImage = true">
        TL;DR
      </button>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="skill-controls">
      <button
        :active="viewMode === 'chart'"
        @click="loadChart()"
      >
        view as <b>CHART</b>
      </button>
      <button
        :active="viewMode === 'table'"
        @click="loadTable()"
      >
        view as <b>TABLE</b>
      </button>
      <button
        :active="viewMode === 'raw'"
        @click="loadRaw()"
      >
        view as <b>JSON</b>
      </button>
    </div>

    <Chart
      v-if="isChartLoaded"
      v-show="viewMode === 'chart'"
      class="skills"
    />

    <Table
      v-if="isTableLoaded"
      v-show="viewMode === 'table'"
      class="skills"
    />

    <Raw
      v-if="isRawLoaded"
      v-show="viewMode === 'raw'"
      class="skills"
    />

    <noscript>
      Can't show with JavaScript turned off
    </noscript>
    <br>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br>
    <br>
    <h2>Recent timeline</h2>
    <Timeline />
    <br>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br>
    <br>
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
      isChartLoaded: false,
      isTableLoaded: false,
      isRawLoaded: false,
      viewMode: 'chart',
      tldrImage: false
    }
  },
  metaInfo () {
    return {
      title: 'frontend'
    }
  },
  mounted () {
    this.loadChart()
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
    loadChart () {
      this.hideSkills(() => {
        this.$store.dispatch('loadSkills').then(() => {
          this.isChartLoaded = true
          this.viewMode = 'chart'
          this.showSkills()
        })
      })
    },
    loadTable () {
      this.hideSkills(() => {
        this.$store.dispatch('loadSkills').then(() => {
          this.isTableLoaded = true
          this.viewMode = 'table'
          this.showSkills()
        })
      })
    },
    loadRaw () {
      this.hideSkills(() => {
        this.$store.dispatch('loadSkills').then(() => {
          this.isRawLoaded = true
          this.viewMode = 'raw'
          this.showSkills()
        })
      })
    }
  }
}
</script>

<style lang="scss">

.skill-controls {
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 540px) {
    flex-direction: row;
  }
}

.tldr-image {
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
}

</style>
