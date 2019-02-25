<template>
  <section>
    <div ref="table" />
    <label for="tableShowNew">tableShowNew</label>
    <input
      id="tableShowNew"
      type="checkbox"
      :value="filters.isNew"
      @change="toggleFilter('isNew', !filters.isNew)"
    >
    <label for="tableShowDisgrace">tableShowDisgrace</label>
    <input
      id="tableShowDisgrace"
      type="checkbox"
      :value="filters.isDisgrace"
      @change="toggleFilter('isDisgrace', !filters.isDisgrace)"
    >
  </section>
</template>

<script>
import Tabulator from 'tabulator-tables'

export default {
  name: 'Table',
  data: function () {
    return {
      filters: {
        isNew: false,
        isDisgrace: false
      }
    }
  },
  mounted () {
    this.$options.tabulator = new Tabulator(this.$refs.table, {
      layout: 'fitColumns',
      resizableColumns: 'header',
      columnMinWidth: 100,
      data: this.$store.state.skills,
      initialFilter: [
        { field: 'isNew', type: '!=', value: true },
        { field: 'isDisgrace', type: '!=', value: true }
      ],
      initialSort: [
        { column: 'level', dir: 'desc' }
      ],
      columns: [
        { title: 'Name', field: 'name', minWidth: 150, widthGrow: 2 },

        { title: 'years', field: 'years', align: 'right' },

        { title: 'level',
          field: 'level',
          formatter: 'progress',
          formatterParams: {
            min: 0,
            max: 10,
            color: '#444'
          }
        },

        { title: 'rating',
          field: 'rating',
          formatter: 'progress',
          formatterParams: {
            min: 0,
            max: 10,
            color: '#444'
          }
        },

        { title: 'area', field: 'area' },

        { title: 'is New',
          field: 'isNew',
          visible: false,
          formatter: 'tickCross',
          formatterParams: {
            allowEmpty: false,
            allowTruthy: true
          }
        },

        { title: 'is Disgrace',
          field: 'isDisgrace',
          visible: false,
          formatter: 'tickCross',
          formatterParams: {
          }
        }
      ]
    })
    window.addEventListener('resize', () => this.$options.tabulator.redraw())
  },
  methods: {
    toggleFilter (filter, value) {
      this.filters[filter] = value
      this.$options.tabulator.clearFilter()
      Object.entries(this.filters).forEach(([field, val]) => {
        if (!val) this.$options.tabulator.addFilter(field, '!=', true)
      })
      // if (value) {
      //
      // } else {
      //   this.$options.tabulator.setFilter(value, '!=', true)
      // }
    },
    toggleDisgrace () {

    }
  }
}
</script>

<style lang="scss">

@import 'tabulator-tables/dist/css/bulma/tabulator_bulma.min.css';

.tabulator {
  width: 100%;
  max-width: 600px;
  min-height: 500px;
  margin: 0 auto;
  background: transparent;
  color: currentColor;

}
.tabulator-responsive-collapse {
  margin-bottom: 30px;
}
.tabulator-row .tabulator-cell,
.tabulator-header .tabulator-col .tabulator-col-content {
}

</style>
