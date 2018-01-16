<template lang='pug'>
  div
    h2 Config
    div.ava
    div.table
      div(v-for="row in dataTable").row
        small {{row.field}}
        p {{row.value}}
    hr
</template>

<script>

export default {
  name: 'config',
  data () {
    return {
      dataTable: [
        {field: "full name", value: "Ilya Vasilyev"},
        {field: "age", value: this.currentAge()},
        {field: "from", value: "Moscow, Russia"},
        {field: "languages", value: "English, Russian"},
        {field: "frameworks", value: "Vue, Electron"},
        {field: "animation", value: "GSAP, SVG, D3"},
        {field: "pre-processors", value: "Pug, Sass"},
        {field: "backend", value: "Node, Feathers, Firebase"},
        {field: "module bundler", value: "webpack"},
        {field: "git client", value: "GitKraken"},
        {field: "repository hosting", value: "BitBucket"},
        {field: "editor", value: "Atom"},
        {field: "os", value: "Linux Mint"},
      ],
    }
  },
  created: function() {
    window.scrollTo(0, 0);
  },
  methods: {
    currentAge: function () {
      let currentTime = new Date()
      return currentTime.getMonth() + 1 < 9 ? currentTime.getFullYear() - 1991 - 1 : currentTime.getFullYear() - 1991 // correct year before and after september
    },
  },
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

.ava {
  $size: 8rem;
  width: $size;
  height: $size;
  margin: 1rem auto;
  background: url(../../static/ava.jpg) no-repeat 50% 50%;
  background-size: contain;
  border-radius: $size;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.3), inset 0px -2px 15px rgba(0, 0, 0, 0.2);
}
.table {

  .row {
    @include flex(row,flex-start, center, nowrap);
    transition: .1s;

    &:hover {
      background: $lightColor;
    }
    small {
      display: block;
      width: calc(50% - 1rem);
      margin-right: 1rem;
      flex-shrink: 0;
      text-align: right;
    }
    p {
      display: block;
      margin: .5rem 0;
      text-align: left;
    }
  }
}

</style>
