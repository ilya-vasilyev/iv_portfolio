<template>
  <div
    id="app"
    class="app"
    :class="{ loaded }"
    itemscope
    itemtype="http://schema.org/Person"
  >
    <nav>
      <h1 @click="showBio = true" tabindex="1">ILYA VASILYEV</h1>
      <transition name="fade">
        <Bio v-show="showBio"/>
      </transition>
      <small
        @click="showBio = !showBio"
        tabindex="1"
        class="inline bio-toggle">
        {{ showBio ? 'hide' : 'show' }} bio
      </small>
      <router-link
        v-for="el in nav"
        :key="el.to"
        :to="{ name: el.to }"
        :style="{letterSpacing: el.spacing + 'px'}"
        :selected="el.to === $route.name"
        class="link">
        {{ el.text }}
      </router-link>
    </nav>
    <router-view />
    <footer>
      <div class="footer-dots"/>
      <button
        @click="switchEffects()"
        :active="showEffects">
        effects: {{showEffects ? 'ON' : 'OFF'}}
      </button>
      <div v-if="showEffects" >
        <button
          v-for="palette in palettes"
          :key="palette.value"
          @click="currentPalette = palette"
          :active="currentPalette === palette">
          {{ palette.display }}
        </button>
      </div>
      <a href="/report.html">report.html</a>
    </footer>
    <div v-if="showEffects" class="effects">
      <div class="colorist" :class="{ [currentPalette.value]: true }" />
      <div class="fog big" />
      <div class="fog small" />
    </div>
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
      showBio: false,
      currentPalette: {},
      palettes: [
        { value:'palette1', display: 'Shore' },
        { value:'palette2', display: 'Dawn' },
        { value:'palette3', display: 'Cloud' },
        { value:'palette4', display: 'Rainbow' },
        { value:'palette5', display: 'Shade ' }
      ]
    }
  },
  computed: {
    showEffects () {
      return this.$store.state.showEffects
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
  created () {
    this.currentPalette = this.palettes[0]
  },
  mounted () {
    setTimeout(() => { this.loaded = true }, 5000)
  },
  methods: {
    switchEffects (val) {
      if (val === undefined) {
        this.$store.dispatch('switchEffects', !this.showEffects)
      } else {
        this.$store.dispatch('switchEffects', val)
      }
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Six+Caps');
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,600');

.app {
  overflow-x: hidden;
  font-family: 'Fira Sans Condensed', sans-serif;
  background: #fff;
  color: #444;

  ::selection {
    background: #444;
    color: rgba(255, 255, 255, 0);
  }
}

.bio-toggle {
  display: block;
  width: 100%;
  text-align: center;
  margin: 15px auto 30px;
  padding: 10px 0;
  border-top: 1px solid #444;
  opacity: 0.7;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

nav {
  
  h1 {
    cursor: pointer;
    font-family: 'Six Caps', sans-serif;
    font-size: 91px;
  }

  a.link {
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

button {
  font-family: 'Fira Sans Condensed', sans-serif;
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
  @supports (mix-blend-mode: screen) {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    mix-blend-mode: screen;
    pointer-events: none;
    opacity: 0;
    animation: coloristAnimation 60s ease infinite;
    transition: opacity 60s;

    .loaded & {
      opacity: 1;
    }

    &.palette1 {
      background: linear-gradient(90deg, #d439ba, #2e9ac1, #2dc1ad, #2e9ac1, #d439ba);
      background-size: 500% 100%;
    }
    &.palette2 {
      background: linear-gradient(90deg, #f3a61a, #d439ba, #5a2ed6, #d439ba, #f3a61a);
      background-size: 500% 100%;
    }
    &.palette3 {
      background: linear-gradient(90deg, #5fad97, #558596, #6663a7, #ada57d, #6eab78);
      background-size: 500% 100%;
    }
    &.palette4 {
      background: linear-gradient(90deg, #ff0000, #ffd504, #28d428, #21e2e2, #191fe6, #f107be);
      background-size: 300% 100%;
    }
    &.palette5 {
      display: none;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transform-origin: top;
  transition: 0.2s;
}
.fade-enter, .fade-leave-to {
  transform: scaleY(0.5);
  opacity: 0;
}

</style>
