<template>
  <div id="app">
    <nav>
      <Bio />
      <router-link
        v-for="el in nav"
        :key="el.to"
        :to="{ name: el.to }"
        :style="{letterSpacing: el.spacing + 'px'}"
      >
        {{ el.text }}
      </router-link>
    </nav>
    <router-view />
    <a href="/report.html">report.html</a>
    <div class="fog big" />
    <div class="fog small" />
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
      nav: [
        { to: 'frontend', text: 'frontend dev', spacing: 14 },
        { to: 'motion', text: 'motion designer', spacing: 9 },
        { to: 'minimalism', text: 'minimalist', spacing: 19 }
      ],
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
  },
  mounted () {

  }

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Six+Caps');
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

nav {
  h1 {
    font-family: 'Six Caps', sans-serif;
    font-size: 91px;
  }
  a {
    font-family: 'Source Code Pro', monospace;
  }
}

::selection {
  background: #444;
  color: rgba(255, 255, 255, 0);
}

@keyframes fogAnimation {
  from {background-position-y: 0px;}
  to {background-position-y: -533px;}
}
.fog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: url('./assets/images/fog.png');
  background-repeat: repeat;
  &.big {
    opacity: 0.3;
    background-size: 800px 533px;
    animation: fogAnimation 30s infinite;
    animation-timing-function: linear;
  }
  &.small{
    opacity: 0.2;
    background-size: 400px 266px;
    animation: fogAnimation 60s infinite;
    animation-timing-function: linear;
  }
}

</style>
