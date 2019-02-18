<template>
  <div class="">
    <button @click="updateSettings({ type: 'bar' })">
      bar
    </button>
    <button @click="updateSettings({ type: 'gauge' })">
      gauge
    </button>
    <button @click="updateSettings({ field: 'rating' })">
      rating
    </button>
    <button @click="updateSettings({ field: 'years' })">
      years
    </button>
    <button @click="updateSettings({ field: 'level' })">
      level
    </button>
    <button @click="updateSettings({ area: 'front' })">
      front
    </button>
    <button @click="updateSettings({ area: '' })">
      all
    </button>
    <div id="chart" />
  </div>
</template>

<script>
import { bb } from 'billboard.js'
export default {
  name: 'Chart',
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      settings: {
        field: '',
        area: '',
        type: 'bar'
      }
    }
  },
  watch: {
    'settings.field': function (newVal, oldVal) {
      // let fields = ['name', newVal]
      // let rows = this.format(fields)
      // let unload = [oldVal]
      // this.$options.chart.load({ rows })
      // this.$nextTick(() => this.$options.chart.load({ unload }))
    },
    'settings.type': function (newVal) {
      // this.$options.chart.transform(newVal)
    }
  },
  mounted () {
    this.$options.chart = bb.generate({
      bindto: '#chart',
      data: {
        x: 'name',
        type: this.settings.type,
        rows: [],
        labels: true
      },
      axis: {
        rotated: true,
        x: {
          type: 'category'
        },
        y: {
          show: false
        }
      },
      tooltip: {
        show: false
      },
      legend: {
        show: false
      },
      color: {
        pattern: ['#def', '#fed', '#efd', '#dfe']
      }
    })
    this.updateSettings({ field: 'years' })
  },
  methods: {
    format (fields, area) {
      let result = [fields]
      this.data
        .filter(el => el.area === area || !area)
        .sort((a, b) => b[fields[1]] - a[fields[1]])
        .forEach(item => {
          result.push(
            fields.map(field => item[field])
          )
        })
      return result
    },
    updateSettings ({ field = this.settings.field, area = this.settings.area, type = this.settings.type }) {
      this.$options.chart.transform(type)
      // debugger
      this.$options.chart.unload()
      this.$options.chart.load({
        rows: this.format(['name', field], area)
      })
      this.settings.field = field
      this.settings.area = area
      this.settings.type = type
    }
  }
}
</script>

<style lang="scss">

@import 'billboard.js/dist/theme/insight.css';

.bb-line {
  stroke-width: 3px;
}

</style>
