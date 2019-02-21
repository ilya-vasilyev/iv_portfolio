<template>
  <main>
    <button @click="loadSkills()">
      load Skills
    </button>
    <button @click="isTableLoaded = true">
      load Table
    </button>
    <Chart
      v-if="isChartLoaded"
      :data="$store.state.skills"
    />
    <Table
      v-if="isTableLoaded"
      :data="$store.state.skills"
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
    })
  },
  data  () {
    return {
      isChartLoaded: false,
      isTableLoaded: false
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
    loadSkills () {
      this.$store.dispatch('loadSkills')
      this.isChartLoaded = true
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
