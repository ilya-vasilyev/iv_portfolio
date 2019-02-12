<template>
  <div ref="table"/>
</template>

<script>
export default {
  name: 'Chart',
  data: function () {
    return {
      tabulator: null,
      tableData: [
        {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
        {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
        {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
        {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"}
      ],
    }
  },
  watch:{
    tableData:{
      handler: function (newData) {
        this.tabulator.replaceData(newData);
      },
      deep: true,
    }
  },
  mounted() {
    import( /* webpackChunkName: 'tabulator' */  'tabulator-tables').then(module => {
      this.tabulator = new module.default(this.$refs.table, {
        data: this.tableData,
        reactiveData:true,
        columns: [
          { title: "Name", field: "name", width: 150 },
          { title: "Age", field: "age", align: "left", formatter: "progress" },
          { title: "Favourite Color", field: "col" },
          { title: "Date Of Birth", field: "dob", align: "center" },
          { title: "Rating", field: "rating", align: "center", formatter: "star" },
          { title: "Passed?", field: "passed", align: "center", formatter: "tickCross" }
        ]
      });
});
  }
}
</script>

<style lang="scss">

@import '~tabulator-tables/dist/css/tabulator_simple.min.css';

.bb-line {
  stroke-width: 33px;
}

</style>
