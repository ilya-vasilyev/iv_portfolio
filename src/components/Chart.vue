<template>
  <div class="">
    <button @click="loadBar('rating')">
      rating
    </button>
    <button @click="loadBar('years')">
      years
    </button>
    <button @click="loadBar('level')">
      level
    </button>
    <button @click="loadYearsLevel()">
      loadYearsLevel
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
      },
      sortBy: 'level',
      showNew: false,
      showDisgrace: false
    }
  },
  computed: {
    oneDimensionData () {
      let result = {}
      let skills = this.$store.state.skills
      skills
        // .filter(skill => skill.isNew === this.showNew && skill.isDisgrace === this.showDisgrace)
        .sort((a, b) => b[this.sortBy] - a[this.sortBy])
        .forEach(skill => {
          Object.entries(skill).forEach(([key, value]) => {
            if (!result[key]) result[key] = []
            result[key].push(value)
          })
        })
      return result
    }
  },
  mounted () {
    this.$options.chart = { destroy: () => {} }
    this.loadBar('years')
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
      let staggerDelay = 0
      let animationKeyframes = [
        {
          value: 0,
          duration: 0
        }, {
          value: 1,
          duration: 250,
          delay: this.$anime.stagger(50, { start: staggerDelay }),
          easing: 'easeOutQuad'
        }
      ]
      this.$anime({
        targets: '#chart .bb-chart-bars .bb-bar',
        scaleX: animationKeyframes,
        opacity: animationKeyframes
      })

      staggerDelay = 200

      this.$anime({
        targets: '#chart .bb-chart-texts .bb-text',
        opacity: animationKeyframes

      })
    },

    loadBar (field) {
      this.hideChart(rebuild)
      function rebuild () {
        this.sortBy = field
        this.$options.chart.destroy()
        this.$options.chart = bb.generate({
          ...this.bbDefaults,
          data: {
            type: 'bar',
            columns: [
              [ field, ...this.oneDimensionData[field] ]
            ],
            labels: true
          },
          axis: {
            rotated: true,
            x: {
              type: 'category',
              categories: this.oneDimensionData.name
            },
            y: { show: false }
          }
        })
        this.showChart()
        this.showBars()
      }
    },

    loadYearsLevel () {
      this.hideChart(rebuild)
      function rebuild () {
        this.$options.chart.destroy()
        this.$options.chart = bb.generate({
          ...this.bbDefaults,
          data: {
            type: 'scatter',
            columns: [
              ['vue_level', 8],
              ['vue', 4],
              ['docker_level', 2],
              ['docker', 1]
            ],
            xs: {
              'vue': 'vue_level',
              'docker': 'docker_level'
            },
            labels: {
              format: (v, id) => id
            }
          },
          axis: {
            x: {
              label: 'level',
              min: 1,
              max: 10
            },
            y: {
              label: 'years',
              min: 1,
              max: 10
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
