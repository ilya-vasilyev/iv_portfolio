<template>
  <section>
    <div class="table-controls">
      <span>
        <input
          id="tableShowNew"
          type="checkbox"
          :value="filters.isNew"
          @change="toggleFilter('isNew', !filters.isNew)"
        >
        <label for="tableShowNew">Show newly learned</label>
      </span>
      <span>
        <input
          id="tableShowProgress"
          type="checkbox"
          :value="showProgress"
          checked="true"
          @change="setColumns()"
        >
        <label for="tableShowProgress">Show progress bars</label>
      </span>
    </div>
    <div
      ref="table"
      aria-hidden="true"
    />
  </section>
</template>

<script>
import Tabulator from 'tabulator-tables'

export default {
  name: 'Table',
  data: function () {
    return {
      filters: {
        isNew: false
      },
      showProgress: true
    }
  },
  computed: {
    columns () {
      return [
        { title: 'name', field: 'name', minWidth: 150, widthGrow: 2 },

        { title: 'years', field: 'years', align: 'right' },

        { title: 'level',
          field: 'level',
          align: this.showProgress ? 'left' : 'right',
          formatter: this.showProgress ? 'progress' : 'plaintext',
          tooltip: true,
          formatterParams: {
            min: -0.1,
            max: 10,
            color: '#444'
          }
        },

        { title: 'rating',
          field: 'rating',
          align: this.showProgress ? 'left' : 'right',
          formatter: this.showProgress ? 'progress' : 'plaintext',
          tooltip: true,
          formatterParams: {
            min: -0.1,
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
        }
      ]
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
      columns: this.columns
    })
    window.addEventListener('resize', () => this.$options.tabulator.redraw())
    this.$ga.event('interaction', 'load', 'table')
  },
  methods: {
    toggleFilter (filter, value) {
      this.filters[filter] = value
      this.$options.tabulator.clearFilter()
      Object.entries(this.filters).forEach(([field, val]) => {
        if (!val) this.$options.tabulator.addFilter(field, '!=', true)
      })
    },
    setColumns () {
      this.showProgress = !this.showProgress
      this.$options.tabulator.setColumns(this.columns)
    }
  }
}
</script>

<style lang="scss">
@import url('../assets/variables.scss');
@import 'tabulator-tables/dist/css/bulma/tabulator_bulma.min.css';

.table-controls {
  margin: 30px auto;

  span {
    white-space: nowrap;
  }

  input[type="checkbox"] {
    cursor: pointer;
    margin: 10px 0 10px 20px;
  }

  label {
    cursor: pointer;

    &:hover {opacity: 0.7;}
  }
}

.tabulator {
  width: 100%;
  max-width: 600px;
  min-height: 500px;
  margin: 0 auto;
  background: transparent;

  .tabulator-header,
  .tabulator-tableHolder .tabulator-table {
    color: $textColor;
  }

  .tabulator-row:last-child .tabulator-cell {
    border-bottom: none;
  }
}

</style>
