<template>
  <div
    id="app"
    class="app"
    :class="{ loaded }"
    itemscope
    itemtype="http://schema.org/Person"
  >
    <header>
      <h1
        tabindex="0"
        itemprop="name"
        @click="showBio = !showBio"
      >
        Ilya Vasilyev
      </h1>
      <transition name="collapse">
        <Bio v-show="showBio" />
      </transition>
      <hr class="no-margin">
      <small
        tabindex="-1"
        class="inline bio-toggle"
        @click="toggleBio()"
      >
        {{ showBio ? 'hide' : 'show' }} bio
      </small>
      <Navigation />
    </header>

    <hr>
    <router-view />
    <hr>
    <Navigation />

    <footer>
      <div class="footer-dots" />

      <div class="footer-content">
        <div class="footer-column">
          <div class="light-header">
            Effects
          </div>
          <button
            :active="showEffects"
            class="inline"
            @click="switchEffects()"
          >
            {{ showEffects ? 'ON' : 'OFF' }}
          </button>
        </div>

        <div
          v-if="showEffects"
          class="footer-column"
        >
          <div class="light-header">
            Themes
          </div>
          <span
            v-for="palette in palettes"
            :key="palette.value"
          >
            <button
              :active="currentPalette === palette"
              class="inline"
              @click="currentPalette = palette"
            >
              {{ palette.display }}
            </button>
          &nbsp;
          </span>
        </div>

        <div class="footer-column">
          <div class="light-header">
            Contacts
          </div>
          <a
            href="https://github.com/ilya-vasilyev"
            rel="noreferrer"
            target="_blank"
          >GitHub</a>
          <a
            href="https://www.linkedin.com/in/ilya-vasilyev-71a12675/"
            rel="noreferrer"
            target="_blank"
          >LinkedIn</a>
          <a
            href="https://www.facebook.com/ilya.vasilyev.5817"
            rel="noreferrer"
            target="_blank"
          >Facebook</a>
        </div>

        <div class="footer-column">
          <div class="light-header">
            Misc
          </div>
          <a
            href="./report.html"
            rel="noreferrer"
            target="_blank"
          >Bundle analyzer</a>
          <a
            href="./assets/lighthouse-report.html"
            rel="noreferrer"
            target="_blank"
          >Lighthouse report</a>
          <a
            :href="'https://sitechecker.pro/seo-report/' + url"
            rel="noreferrer"
            target="_blank"
          >Sitechecker</a>
          <a
            href="https://old-2018.ilya.aivi.dev"
            rel="noreferrer"
            target="_blank"
          >Old version</a>
        </div>
      </div>

      <small class="date">Made in 2019</small>
    </footer>

    <div
      v-if="showEffects"
      class="effects"
    >
      <div
        class="colorist"
        :class="{ [currentPalette.value]: true }"
      />
      <transition name="fade">
        <div v-if="loaded">
          <div class="fog big" />
          <div class="fog small" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Bio from '@/components/Bio.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Bio,
    Navigation
  },
  data () {
    return {
      title: 'Ilya Vasilyev | frontend developer | motion designer | minimalist',
      description: 'Ilya Vasilyev – front-end web developer, specialised in Vue.js, visualization, animation and interactivity, with entrepreneurial experience',
      url: 'https://ilya.aivi.dev/',
      image: 'https://ilya.aivi.dev/assets/og-card.jpg',
      loaded: false,
      showBio: false,
      currentPalette: {},
      palettes: [
        { value: 'palette1', display: 'Shore' },
        { value: 'palette2', display: 'Dawn' },
        { value: 'palette3', display: 'Cloud' },
        { value: 'palette4', display: 'Rainbow' },
        { value: 'palette5', display: 'Shade ' }
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
      title: this.title,
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
        { property: 'og:image:secure_url', content: this.image },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '984' },
        { property: 'og:image:height', content: '780' },
        { property: 'og:description', content: this.description },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: this.url },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:creator', content: 'Ilya Vasilyev' },
        { name: 'twitter:image:src', content: this.image },

        { itemprop: 'name', content: this.title },
        { itemprop: 'description', content: this.description },
        { itemprop: 'image', content: this.image },

        { name: 'google-site-verification', content: '_4oTOmojtdGbuD1L9U2bNguWZH2OMdIBtMjDt38-70w' }
      ]
    }
  },
  created () {
    this.currentPalette = this.palettes[0]
  },
  mounted () {
    setTimeout(() => { this.loaded = true }, 1000)
  },
  methods: {
    switchEffects (val) {
      if (val === undefined) {
        this.$store.dispatch('switchEffects', !this.showEffects)
      } else {
        this.$store.dispatch('switchEffects', val)
      }
      this.$ga.event('interaction', 'click', 'effects', val ? 1 : 0)
    },
    toggleBio () {
      this.showBio = !this.showBio
      this.$ga.event('interaction', 'click', 'bio', this.showBio ? 1 : 0)
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/variables.scss');
@import url('https://fonts.googleapis.com/css?family=Six+Caps');
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,600');

.app {
  overflow-x: hidden;
  font-family: 'Fira Sans Condensed', sans-serif;
  background: $backColor;
}

header {
  h1 {
    cursor: pointer;
    font-family: 'Six Caps', sans-serif;
    font-size: 91px;
  }
}

nav {

  a.router-link {
    font-family: 'Source Code Pro', monospace;
    white-space: nowrap;

    &[selected] {
      font-weight: 800;

      @media (min-width: 500px) {
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
}

button {
  font-family: 'Fira Sans Condensed', sans-serif;
}

label {
  user-select: none;
}

footer {

  button.inline {
    font-weight: 300;
    text-decoration: none;
  }

  a {
    font-weight: 300;
    text-decoration: none;
    color: $backColor;

    &:hover {
      text-decoration: underline;
    }
  }

  .date {
    display: block;
    margin: 30px 0 0;
  }
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

.footer-content {

  a {
    padding-right: 10px;
    white-space: nowrap;
    }

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.footer-column {
  margin: 60px 60px 60px 0;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

@keyframes leftRight {
  0% {transform: translateX(-10px);}
  50% {transform: translateX(0px);}
  100% {transform: translateX(-10px);}
}

@keyframes fogAnimation {
  from {background-position-y: 0px;}
  to {background-position-y: -600px;}
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
    opacity: 0.4;
    background-size: 800px 600px;
    animation: fogAnimation 30s infinite;
    animation-timing-function: linear;
  }

  &.small{
    opacity: 0.3;
    background-size: 400px 300px;
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

.collapse-enter-active, .collapse-leave-active {
  transform-origin: top;
  transition: 0.2s;
}
.collapse-enter, .collapse-leave-to {
  transform: scaleY(0.5);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.component-loading,
.component-error  {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 40px auto;
  height: 400px;
  color: $textColor;
  * {
    margin: 1rem;
  }
}

</style>
