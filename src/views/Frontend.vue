<template>
  <main>
    <button @click="loadChart()" :active="viewMode === 'chart'">
      view as <b>CHART</b>
    </button>
    <button @click="loadTable()" :active="viewMode === 'table'">
      view as <b>TABLE</b>
    </button>
    <button @click="loadRaw()" :active="viewMode === 'raw'">
      view as <b>JSON</b>
    </button>
    <Chart
      v-if="isChartLoaded"
      v-show="viewMode === 'chart'"
    />
    <Table
      v-if="isTableLoaded"
      v-show="viewMode === 'table'"
    />
    <Raw
      v-if="isRawLoaded"
      v-show="viewMode === 'raw'"
    />
    <noscript>
      Can't show with JavaScript turned off
    </noscript>
    <br>
    <br>
    <br>
    <br>
    <h2>Recent timeline</h2>
    <Timeline />
    <br>
    <br>
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
      timeout: 15000
    }),
    Table: () => ({
      component: import(/* webpackChunkName: 'table', webpackPrefetch: true */ '@/components/Table.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 15000
    }),
    Raw: () => ({
      component: import(/* webpackChunkName: 'raw', webpackPrefetch: true */ '@/components/Raw.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 15000
    }),
    Timeline: () => ({
      component: import(/* webpackChunkName: 'timeline', webpackPrefetch: true */ '@/components/Timeline.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 15000
    })
  },
  data  () {
    return {
      isChartLoaded: false,
      isTableLoaded: false,
      isRawLoaded: false,
      viewMode: 'chart'
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
    loadChart () {
      this.$store.dispatch('loadSkills').then(() => {
        this.isChartLoaded = true
        this.viewMode = 'chart'
      })
    },
    loadTable () {
      this.$store.dispatch('loadSkills').then(() => {
        this.isTableLoaded = true
        this.viewMode = 'table'
      })
    },
    loadRaw () {
      this.$store.dispatch('loadSkills').then(() => {
        this.isRawLoaded = true
        this.viewMode = 'raw'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
