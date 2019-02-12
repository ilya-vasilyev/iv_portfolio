<template>
  <div id="chart"/>
</template>

<script>
export default {
  name: 'Chart',
  mounted() {
    import( /* webpackChunkName: 'billboard' */ 'billboard.js').then(module => {
      var chart = module.bb.generate({
        bindto: "#chart",
        data: {
          type: "line",
          columns: [
            ["data1", 30, 200, 100, 400, 150, 250]
          ]
        }
    })
});
  }
}
</script>

<style lang="scss">

@import '~billboard.js/dist/theme/insight.css';

.bb-line {
  stroke-width: 3px;
}

</style>
