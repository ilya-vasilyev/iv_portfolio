<template>
  <section>
    <h2>This is chart</h2>
    <div class="chart-container">
      <div class="chart-controls">
        <button
          v-for="mode in modes"
          :key="mode.display"
          :active="currentMode === mode.display"
          @click="load(mode)">
          {{ mode.display }}
        </button>
      </div>
      <div
        id="chart"
        aria-hidden="true"
      />
    </div>
  </section>
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
        size: { height: 500 },
        bar: { width: { ratio: 0.8, max: 100 } },
        tooltip: { show: false },
        transition: { duration: 0 },
        legend: { show: false },
        color: { pattern: ['#444'] }
      },
      currentMode: null,
      modes: [
        {
          display: 'Rating 0',
          type: 'bar',
          props: {
            field: 'rating'
          }
        },
        {
          display: 'Rating 0 0',
          type: 'bar',
          props: {
            field: 'rating'
          }
        },
        {
          display: 'Rating 0 0 0 Rating 0 0 0',
          type: 'bar',
          props: {
            field: 'rating'
          }
        },
        {
          display: 'Rating',
          type: 'bar',
          props: {
            field: 'rating'
          }
        },
        {
          display: 'Disgrace',
          type: 'bar',
          props: {
            field: 'level',
            showBase: false,
            showDisgrace: true
          }
        },
        {
          display: 'Years vs Level',
          type: 'xy',
          props: {
            fieldX: 'level',
            fieldY: 'years',
            showNew: true,
            showDisgrace: true
          }
        },
        {
          display: 'Areas',
          type: 'pie',
          props: {
            field: 'level',
            showNew: true,
            showDisgrace: true
          }
        }
      ]

    }
  },
  mounted () {
    this.$options.chart = { destroy: () => {} }
    this.load(this.modes[0])
  },
  methods: {
    hideChart (callback) {
      this.$anime({
        targets: '#chart',
        scaleY: 0.4,
        opacity: 0.5,
        filter: this.$store.state.showEffects ? 'blur(10px)' : false,
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
        filter: this.$store.state.showEffects ? 'blur(0px)' : false,
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

    showXY () {
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

    showPie () {
      this.$anime({
        targets: '#chart .bb-chart-arcs .bb-chart-arc',
        opacity: [
          {
            value: 0,
            duration: 0
          }, {
            value: 1,
            duration: 750,
            delay: this.$anime.stagger(100, { start: 0 }),
            easing: 'easeOutSine'
          }
        ],
        rotate: [
          {
            value: -60,
            duration: 0
          }, {
            value: 0,
            duration: 500,
            delay: this.$anime.stagger(100, { start: 0 }),
            easing: 'easeOutSine'
          }
        ]
      })
      this.$anime({
        targets: '#chart .bb-chart-arcs text',
        opacity: [
          {
            value: 0,
            duration: 0
          }, {
            value: 1,
            duration: 200,
            delay: this.$anime.stagger(100, { start: 500 }),
            easing: 'easeOutSine'
          }
        ]
      })
    },

    load ({ display, type, props }) {
      this.currentMode = display
      switch (type) {
        case 'bar':
          this.loadBar(props)
          break
        case 'xy':
          this.loadXY(props)
          break
        case 'pie':
          this.loadPie(props)
          break
        default:
          break
      }
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
              format: (v, id) => id,
              position: { y: -5 }
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
          },
          point: { r: 5 }
        })
        this.showChart()
        this.showXY()
      }
    },

    loadPie ({ field, showBase = true, showNew = false, showDisgrace = false, areas = ['front', 'back', 'devops'] }) {
      const accumulator = {}
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
          if (!accumulator[skill.area]) accumulator[skill.area] = 0
          accumulator[skill.area] += skill[field]
        })
      const data = Object.entries(accumulator)

      this.hideChart(rebuild)
      function rebuild () {
        this.$options.chart.destroy()
        this.$options.chart = bb.generate({
          ...this.bbDefaults,
          data: {
            type: 'pie',
            columns: data
          },
          pie: {
            label: {
              format: (v, r, id) => r > 0.1 ? id : '',
              ratio: 1.1
            },
            padding: 5,
            innerRadius: 20,
            expand: false
          }
          // color: { pattern: ['#444', '#666', '#888'] }
        })
        this.showChart()
        this.showPie()
      }
    }

  }
}
</script>

<style lang="scss">

@import 'billboard.js/dist/theme/insight.css';

.chart-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.chart-controls {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
	flex-wrap: wrap;
	justify-content: center;
}


@media (min-width: 900px) {
  .chart-container {
    max-width: 900px;
    flex-direction: row;
  }

  .chart-controls {
    flex-shrink: 0;
    max-width: 250px;
    margin-right: 50px;
    flex-direction: column;
    align-items: flex-end;
  }
}

#chart {
  width: 100%;
  max-width: 600px;
  min-height: 500px;
  margin: 0 auto;
}

.bb {
  pointer-events: none;

  svg,
  svg text {
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 18px;
  }

  .bb-chart-lines .bb-circle {
    opacity: 1!important; /* to override inline styles, that's why */
  }

  .bb-chart-arcs text,
  .bb-axis-x .tick text,
  .bb-axis-x-label,
  .bb-axis-y-label {
    font-weight: 700;
  }
}

</style>
