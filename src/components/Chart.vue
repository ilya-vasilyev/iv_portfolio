<template>
  <div class="">
    <button @click="loadBar({ field: 'rating' })">
      rating
    </button>
    <button @click="loadBar({ field: 'level', showBase: false, showDisgrace: true })">
      showDisgrace
    </button>

    <button @click="loadXY({ fieldX: 'level',fieldY: 'years', showNew: true, showDisgrace: true })">
      loadYearsLevel
    </button>
    <button @click="loadXY({ fieldX: 'years',fieldY: 'level', showNew: true, showDisgrace: true })">
      loadLevelYears
    </button>
    <button @click="loadPie({})">
      loadPie
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
        color: { pattern: ['#666'] }
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

    showDots () {
      let opacityKeyframes = [
        {
          value: 0,
          duration: 0
        }, {
          value: 1,
          duration: 300,
          delay: this.$anime.stagger(100, { start: 100 }),
          easing: 'easeOutQuad'
        }
      ]
      let yKeyframes = [
        {
          value: -15,
          duration: 0
        }, {
          value: 0,
          duration: 300,
          delay: this.$anime.stagger(100, { start: 100 }),
          easing: 'easeOutBack'
        }
      ]
      this.$anime({
        targets: '#chart .bb-chart-lines .bb-target',
        opacity: opacityKeyframes,
        translateY: yKeyframes
      })

      this.$anime({
        targets: '#chart .bb-chart-texts .bb-chart-text',
        opacity: opacityKeyframes,
        translateY: yKeyframes

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
          },
          bar: {
            radius: 10,
            width: { ratio: 0.8 }
          }

        })
        this.showChart()
        this.showBars()
      }
    },

    loadXY ({ fieldX, fieldY, showBase = true, showNew = false, showDisgrace = false, areas = [] }) {
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
        .sort((a, b) => a[fieldX] - b[fieldX])
        .forEach(skill => {
          data.columns.push([skill.name + '_' + fieldX, skill[fieldX]])
          data.columns.push([skill.name, skill[fieldY]])
          data.xs[skill.name] = skill.name + '_' + fieldX
        })

      const pad = 1
      data.axis.x.min = skills.reduce((a, c) => (c[fieldX] < a ? c[fieldX] : a), 3) - pad
      data.axis.x.max = skills.reduce((a, c) => (c[fieldX] > a ? c[fieldX] : a), 3) + pad
      data.axis.y.min = skills.reduce((a, c) => (c[fieldY] < a ? c[fieldY] : a), 3) - pad
      data.axis.y.max = skills.reduce((a, c) => (c[fieldY] > a ? c[fieldY] : a), 3) + pad

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
              // padding: {
              //   // left: 30,
              //   // right: 30
              // }
            },
            y: {
              label: fieldY,
              min: data.axis.y.min,
              max: data.axis.y.max
              // padding: {
              //   top: 30,
              //   bottom: 30
              // }
            }
          },
          color: { pattern: ['#522', '#252', '#225'] },
          grid: {
            x: { show: true },
            y: { show: true }
          },
          point: {
            r: 5,
            focus: { expand: { r: 6 } }
          }
        })
        this.showChart()
        this.showDots()
      }
    },

    loadPie ({ showBase = true, showNew = false, showDisgrace = false, areas = ['front', 'back', 'devops'] }) {
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
        // .sort((a, b) => a[fieldX] - b[fieldX])
        .forEach(skill => {
          // data.columns.push([skill.name + '_' + fieldX, skill[fieldX]])
          // data.columns.push([skill.name, skill[fieldY]])
          // data.xs[skill.name] = skill.name + '_' + fieldX
        })

      this.hideChart(rebuild)
      function rebuild () {
        this.$options.chart.destroy()
        this.$options.chart = bb.generate({
          ...this.bbDefaults,
          data: {
            type: 'pie',
            columns: [
              ['front', 1, 3],
              ['back', 1, 4],
              ['devops', 1, 5]

            ],
            onover: () => {}
          },
          pie: {
            label: {
              format: (v, r, id) => `${id}: ${Math.round(r * 100)}%`,
              ratio: 1
            },
            padding: 5,
            innerRadius: 20,
            expand: false
          },
          color: { pattern: ['#666', '#333', '#999'] }
        })
        this.showChart()
        this.showDots()
      }
    }

  }
}
</script>

<style lang="scss">

@import 'billboard.js/dist/theme/insight.css';

#chart {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.bb text {
  font-size: 18px;
}

</style>
