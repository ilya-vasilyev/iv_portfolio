<template>
  <section class="raw-container">
    <h2>This is JSON</h2>
    <div
      class="raw"
      aria-hidden="true"
    >
      <pre>
        <code
          class="language-javascript"
          v-html="html"
          />
      </pre>
    </div>
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
    this.html = JSON.stringify(this.$store.state.skills, null, 2)
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  }
}
</script>

<style lang="scss">

@import 'prismjs/themes/prism-tomorrow.css';

.raw-container {
  position: relative;
  z-index: 1;
}

.raw {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  max-height: 400px;
  overflow-y: scroll;

  & .language-javascript {
    font-family: 'Source Code Pro', monospace;
    font-size: 18px;
  }

}

</style>
