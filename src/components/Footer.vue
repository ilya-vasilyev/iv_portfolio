<template lang='pug'>
  div.workarea
    footer
      span Created with
        a(href="https://vuejs.org/" target="_blank" title="VueJS").vue
      span in 2018
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

footer {
  padding: 3rem 0;
  .vue, {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
    background: no-repeat 50% 50%;
    background-size: contain;
    &.vue {
      background-image: url(../assets/vue.png);
      margin: 0 .5rem;
    }
  }
}

</style>
