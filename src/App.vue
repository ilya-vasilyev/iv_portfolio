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
  data () {
    return {
      title: 'Ilya Vasilyev | homepage',
      description: 'personal web page of Ilya Vasilyev',
      url: 'https://www.my-site.com/my-special-page',
      image: 'https://www.my-site.com/my-special-image.jpg'
    }
  },
  metaInfo () {
    return {
      title: 'homepage',
      titleTemplate: 'Ilya Vasilyev | %s',
      links: [
        { rel: 'canonical', href: this.url }
      ],
      meta: [
        { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: this.description },

        { property: 'og:title', content: this.title },
        { property: 'og:site_name', content: 'Ilya Vasilyev' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.url },
        { property: 'og:image', content: this.image },
        { property: 'og:description', content: this.description },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: this.url },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:creator', content: 'Ilya Vasilyev' },
        { name: 'twitter:image:src', content: this.image },

        { itemprop: 'name', content: this.title },
        { itemprop: 'description', content: this.description },
        { itemprop: 'image', content: this.image }
      ]
    }
  }
}
</script>

<style lang="scss">

a {
  color: #444;
}

</style>
