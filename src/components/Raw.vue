<template>
  <section class="skills raw">
    <pre>
      <code class="language-javascript" v-html="html"/>
    </pre>
  </section>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Raw',
  data: function () {
    return {
      html: ''
    }
  },
  mounted () {
    this.html = Prism.highlight(
      JSON.stringify(this.$store.state.skills, null, 2),
      Prism.languages.javascript,
      'javascript'
    )
  },
  methods: {

  }
}
</script>

<style lang="scss">

@import 'prismjs/themes/prism-tomorrow.css';

.skills.raw {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  max-height: 400px;
  overflow-y: scroll;
  background: #000;

  & .language-javascript {
    font-family: 'Source Code Pro', monospace;
    background: #000;
    font-size: 18px;

    .token.punctuation {color: #fff;}
    .token.string {color: #cfc;}
    .token.number {color: #fcc;}
    .token.boolean {color: #ffc;}
  }

}

</style>
