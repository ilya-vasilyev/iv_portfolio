<template>
  <div
    id="app"
    class="app"
    :class="{ loaded, lightMode, darkMode }"
  >
    <nav>
      <h1>ILYA VASILYEV</h1>
      <hr>
      <small>expand basic info</small>
      <hr>
      <Bio />
      <router-link
        v-for="el in nav"
        :key="el.to"
        :to="{ name: el.to }"
        :style="{letterSpacing: el.spacing + 'px'}"
        :selected="el.to === $route.name"
      >
        {{ el.text }}
      </router-link>
      <hr>
    </nav>
    <router-view />
    <footer>
      <div class="footer-dots"/>
      <a href="/report.html">report.html</a>
    </footer>
    <div class="colorist" />
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
      image: 'https://iv.netlify.com/assets/images/preview.jpg',
      loaded: false,
      lightMode: true,
      darkMode: false
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
    setTimeout(() => { this.loaded = true }, 5000)
  }

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Six+Caps');
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,600');

.app {
  overflow-x: hidden;
  font-family: 'Fira Sans Condensed', sans-serif;

  &.lightMode {
    background: #fff;
    color: #444;
    ::selection {
      background: #444;
      color: rgba(255, 255, 255, 0);
    }
  }

  &.darkMode {
    background: #444;
    color: #fff;
    ::selection {
      background: #fff;
      color: rgba(255, 255, 255, 0);
    }
  }
}

nav {

  h1 {
    font-family: 'Six Caps', sans-serif;
    font-size: 91px;
  }

  a {
    font-family: 'Source Code Pro', monospace;
    white-space: nowrap;

    &[selected] {
      font-weight: 800;

      &::before {
        content: '>';
        display: inline-block;
        opacity: 0.5;
        animation: leftRight 1s infinite forwards;
      }

      &::after {
        content: '<';
        display: inline-block;
        opacity: 0.5;
        animation: leftRight 1s 0.5s infinite backwards;
      }
    }
   }
}

label {
  user-select: none;
}

footer {
  position: relative;
}
.footer-dots {
  width: 100%;
  height: 150px;
  position: absolute;
  top: -149px;
  left: 0;
  background: 50% 50% repeat-x url('./assets/images/footer_dot.svg');
  background-size: contain;
}

@keyframes leftRight {
  0% {transform: translateX(-10px);}
  50% {transform: translateX(0px);}
  100% {transform: translateX(-10px);}
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
    opacity: 0.2;
    background-size: 800px 533px;
    animation: fogAnimation 30s infinite;
    animation-timing-function: linear;
  }

  &.small{
    opacity: 0.1;
    background-size: 400px 266px;
    animation: fogAnimation 60s infinite;
    animation-timing-function: linear;
  }
}

@keyframes coloristAnimation {
  0% {background-position-x: 0%; }
  50% {background-position-x: 100%;}
  100% {background-position-x: 0%;}
}

.colorist {
  display: none;
  @supports (mix-blend-mode: overlay) {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #d439ba, #2e9ac1, #2dc1ad);
    background-size: 300% 100%;
    mix-blend-mode: lighten;
    pointer-events: none;
    opacity: 0;
    animation: coloristAnimation 30s ease infinite;
    transition: opacity 60s;

    .loaded & {
      opacity: 0.8;
    }
  }
}

</style>
