<template>
  <div id="app">
    <Bio />
    <nav>
      <router-link :to="{ name: 'frontend' }">
        frontend dev
      </router-link>
      <router-link :to="{ name: 'motion' }">
        motion designer
      </router-link>
      <router-link :to="{ name: 'minimalism' }">
        minimalism
      </router-link>
    </nav>
    <router-view />
    <a href="/report.html">report.html</a>
  </div>
</template>

<script>
import Bio from '@/components/Bio.vue'
export default {
  components: {
    Bio
  },
  data () {
    return {
      title: 'Ilya Vasilyev | homepage',
      description: 'personal web page of Ilya Vasilyev',
      url: 'https://iv.netlify.com/',
      image: 'https://iv.netlify.com/assets/images/preview.jpg'
    }
  },
  metaInfo () {
    return {
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
