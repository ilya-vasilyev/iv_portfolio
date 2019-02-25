<template>
  <main>
    <button @click="loadChart()">
      load Chart
    </button>
    <button @click="loadTable()">
      load Table
    </button>
    <button @click="loadRaw()">
      load Raw
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
      timeout: 10000
    }),
    Raw: () => ({
      component: import(/* webpackChunkName: 'raw', webpackPrefetch: true */ '@/components/Raw.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 10000
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
.aaa {
  h1, h2, h3, h4, p {
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    background-position: 0% 50%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 2s;
    &.rotate {
      background-position: 100% 100%
    }
  }
}
</style>
