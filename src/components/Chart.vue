<template>
  <div class="">
    <button @click="updateSettings({ type: 'bar', area: '', field: 'rating' })">
      ratings
    </button>
    <button @click="updateSettings({ type: 'donut', area: 'front', field: 'years' })">
      years
    </button>
    <button @click="updateSettings({ type: 'scatter', area: '', field: 'level' })">
      level
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
        x: { type: 'category' },
        y: { show: false }
      },
      tooltip: { show: false },
      legend: { show: false },
      color: { pattern: ['#444'] },
      transition: { duration: 0 }
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
      this.$anime({
        targets: '#chart svg',
        scaleY: 1.4,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 300,
        easing: 'easeInBack',
        complete: unload.bind(this)
      })
      function unload () {
        this.$options.chart.unload({
          done: load.bind(this)
        })
      }
      function load () {
        this.$options.chart.load({
          rows: this.format(['name', field], area),
          done: transform.bind(this)
        })
      }
      function transform () {
        this.$options.chart.transform(type)
        this.settings.field = field
        this.settings.area = area
        this.settings.type = type
        this.$anime({
          targets: '#chart svg',
          scaleY: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 200,
          easing: 'easeOutBack'
        })
      }
    }
  }
}
</script>

<style lang="scss">

@import 'billboard.js/dist/theme/insight.css';

.bb text {
  font-size: 18px;
}

</style>
