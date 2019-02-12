<template>
  <div id="app">
    <router-link :to="{ name: 'A' }">a</router-link>
    <router-link :to="{ name: 'B' }">b</router-link>
    <router-view></router-view>
    <a href="/report.html">report.html</a>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s | My Awesome Webapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>

<style lang="scss">

a {
  color: #bed;
}

</style>
