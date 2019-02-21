<template>
  <div class="">
    <button @click="loadBar({ field: 'rating' })">
      rating
    </button>
    <button @click="loadBar({ field: 'level', showBase: false, showDisgrace: true })">
      showDisgrace
    </button>

    <button @click="loadYearsLevel({ fieldX: 'level',fieldY: 'years' })">
      loadYearsLevel
    </button>
    <button @click="loadYearsLevel({ fieldX: 'years',fieldY: 'level' })">
      loadLevelYears
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
      bbDefaults: {
        bindto: '#chart',
        bar: { width: { ratio: 0.8, max: 100 } },
        tooltip: { show: false },
        transition: { duration: 0 },
        legend: { show: false },
        color: { pattern: ['#444'] }
      }
    }
  },
  mounted () {
    this.$options.chart = { destroy: () => {} }
    this.loadBar({
      field: 'rating',
      showNew: true,
      showDisgrace: true,
      areas: ['front']
    })
  },
  methods: {
    hideChart (callback) {
      this.$anime({
        targets: '#chart',
        scaleY: 0.4,
        opacity: 0.5,
        filter: 'blur(10px)',
        duration: 300,
        easing: 'easeInBack',
        complete: callback.bind(this)
      })
    },
    showChart () {
      this.$anime({
        targets: '#chart',
        scaleY: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 200,
        easing: 'easeOutBack'
      })
    },
    showBars () {
      let animationKeyframes = [
        {
          value: 0,
          duration: 0
        }, {
          value: 1,
          duration: 250,
          delay: this.$anime.stagger(50, { start: 0 }),
          easing: 'easeOutQuad'
        }
      ]
      this.$anime({
        targets: '#chart .bb-chart-bars .bb-bar',
        scaleX: animationKeyframes,
        opacity: animationKeyframes
      })

      animationKeyframes[1].delay = this.$anime.stagger(50, { start: 200 })

      this.$anime({
        targets: '#chart .bb-chart-texts .bb-text',
        opacity: animationKeyframes

      })
    },

    loadBar ({ field, sort = field, showBase = true, showNew = false, showDisgrace = false, areas = [] }) {
      const data = {}
      const skills = this.$store.state.skills

      skills
        .filter(skill => {
          const ifBase = showBase && !skill.isNew && !skill.isDisgrace
          const ifNew = showNew && skill.isNew
          const ifDisgrace = showDisgrace && skill.isDisgrace
          const ifArea = !areas.length || areas.includes(skill.area)
          return (ifBase || ifNew || ifDisgrace) && ifArea
        })
        .sort((a, b) => b[sort] - a[sort])
        .forEach(skill => {
          Object.entries(skill).forEach(([key, value]) => {
            if (!data[key]) data[key] = []
            data[key].push(value)
          })
        })

      this.hideChart(rebuild)

      function rebuild () {
        this.sortBy = field
        this.$options.chart.destroy()
        this.$options.chart = bb.generate({
          ...this.bbDefaults,
          data: {
            type: 'bar',
            columns: [ [ field, ...data[field] ] ],
            labels: true
          },
          axis: {
            rotated: true,
            x: {
              type: 'category',
              categories: data.name
            },
            y: { show: false }
          }
        })
        this.showChart()
        this.showBars()
      }
    },

    loadYearsLevel ({ fieldX, fieldY, showBase = true, showNew = false, showDisgrace = false, areas = [] }) {
      const data = {
        columns: [],
        xs: {},
        axis: { x: {}, y: {} }
      }
      const skills = this.$store.state.skills

      skills
        .filter(skill => {
          const ifBase = showBase && !skill.isNew && !skill.isDisgrace
          const ifNew = showNew && skill.isNew
          const ifDisgrace = showDisgrace && skill.isDisgrace
          const ifArea = !areas.length || areas.includes(skill.area)
          return (ifBase || ifNew || ifDisgrace) && ifArea
        })
        .forEach(skill => {
          data.columns.push([skill.name + '_' + fieldX, skill[fieldX]])
          data.columns.push([skill.name, skill[fieldY]])
          data.xs[skill.name] = skill.name + '_' + fieldX
        })

      const pad = 1
      data.axis.x.min = skills.reduce((a, c) => (c[fieldX] < a ? c[fieldX] : a), 0) - pad
      data.axis.x.max = skills.reduce((a, c) => (c[fieldX] > a ? c[fieldX] : a), 0) + pad
      data.axis.y.min = skills.reduce((a, c) => (c[fieldY] < a ? c[fieldY] : a), 0) - pad
      data.axis.y.max = skills.reduce((a, c) => (c[fieldY] > a ? c[fieldY] : a), 0) + pad

      this.hideChart(rebuild)
      function rebuild () {
        this.$options.chart.destroy()
        this.$options.chart = bb.generate({
          ...this.bbDefaults,
          data: {
            type: 'scatter',
            columns: data.columns,
            xs: data.xs,
            labels: {
              format: (v, id) => id
            }
          },
          axis: {
            x: {
              label: fieldX,
              min: data.axis.x.min,
              max: data.axis.x.max
            },
            y: {
              label: fieldY,
              min: data.axis.y.min,
              max: data.axis.y.max
            }
          },
          grid: {
            x: { show: true },
            y: { show: true }
          }
        })
        this.showChart()
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
