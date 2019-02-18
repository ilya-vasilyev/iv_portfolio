<template>
  <div id="chart"/>
</template>

<script>
import { bb } from 'billboard.js'
export default {
  name: 'Chart',
  mounted() {
    var chart = bb.generate({
      bindto: "#chart",
      data: {
        type: "line",
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250]
        ]
      }
    })
  }
}
</script>

<style lang="scss">

@import 'billboard.js/dist/theme/insight.css';

.bb-line {
  stroke-width: 3px;
}

</style>
