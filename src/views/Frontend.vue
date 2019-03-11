<template>
  <main>
    <p>
      Hello, I'm
      <b>Ilya</b>
      <b>Vasilyev</b> –
      <b>front-end web developer</b>,
      specialised in
      <b>
        Vue.js
      </b>
      , visualization, animation and interactivity.
    </p>

    <p>
      And this is my personal portfolio website, stuffed to the gills with highly annoying, CPU intensive and absolutely unnecesary visual effects.
      I've created them just because I can.
      And you can
      <button
        class="inline"
        @click="$store.dispatch('switchEffects', !$store.state.showEffects)"
      >
        turn them {{ $store.state.showEffects ? 'OFF' : 'ON' }}
      </button>
      anytime.
      This whole project exists only to demonstrate my skills and abilities in web development.
      Here you would know almost everything about me – I can't see any other reasons how you ended up on this page and why you're reading this.
      If you want to dig deeper see
      <a
        href="https://github.com/ilya-vasilyev/iv_portfolio"
        target="_blank"
      >source code on Github</a>.
    </p>

    <h2>Summary</h2>
    <p>
      I've been around web development since <b>2013</b>,
      starting from <b>UI</b> and <b>UX</b> design, within startup environment,
      prototyping apps with <b>HTML</b> and <b>CSS</b>, exploring ideas of interactive comics and books,
      transforming this ideas into <b>interactive infographics</b> for web.
    </p>

    <p>
      Which resulted in a startup about <b>dynamic visualizations of financial models</b>,
      where from the tech side <b>Javascript</b> was inevitable, alongside with <b>D3</b>, <b>GSAP</b>, <b>AngularJS</b> and <b>Node.js</b>,
      and from the founder side: <b>fin analysis</b>, <b>Lean Startup</b>,
      <b>Business Model Canvas</b>, <b>Agile</b>, <b>digital marketing</b> and <b>sales</b> were learnt to keep it going
      for 2 years in searching for a product-market-fit, which was never found.
    </p>
    <p>
      Then there was a series of freelance and consulting projects,
      I've discovered and started learning <b>Vue.js</b>, which is the best front-end framework so far,
      and eventually I landed on a front-end dev job at the oldest state-independent media in Russia – <b>«Ведомости»</b>.
      That was quite intense, with <b>micro-services</b>, <b>CI/CD</b>,
      migration to <b>Vue with SSR</b> and never-ending backlog.
    </p>
    <p>
      As for now, I want to dive deeper in <b>JAMstack</b>, <b>client-side machine learning</b>,
      <b>graph databases</b> and generally improve my inconsistent knowledge of computer science.
      At the same time I'm fascinated by the fact that today management is broken,
      so I investigate the areas of <b>DDD</b>, <b>Agile scaling</b>, <b>PMO</b>, <b>The OS Canvas</b>,
      trying to find the right way to reduce stress and increase productivity in the modern workplace.
    </p>
    <img
      v-show="tldrImage"
      :src="tldrImageSrc"
      class="tldr-image"
    >
    <div>
      <button
        v-if="!tldrImage"
        class="prime"
        @click="tldrImage = true"
      >
        TL;DR
      </button>
    </div>

    <hr>

    <h2>Toolkit</h2>
    <p>You're probably intereseted <i>(why shouldn't you be?)</i> in my skills end experience in web development.</p>
    <small>Subjective disclamer</small>
    <p>
      In case you're too lazy to appreciate my data visualization efforts, here is the point:
      <b>Vue</b>, no <i>React</i>, disgraceful <i>AngularJS</i>
    </p>

    <h5>View as:</h5>
    <div class="skill-controls">
      <button
        :active="viewMode === 'chart'"
        class="prime"
        @click="loadSkillComponent('chart')"
      >
        <b>CHART</b>
      </button>
      <button
        :active="viewMode === 'table'"
        class="prime"
        @click="loadSkillComponent('table')"
      >
        <b>TABLE</b>
      </button>
      <button
        :active="viewMode === 'raw'"
        class="prime"
        @click="loadSkillComponent('raw')"
      >
        <b>JSON</b>
      </button>
    </div>

    <div class="skills-container">
      <div v-if="showSkillsContainer">
        <Chart
          v-if="isSkillComponentLoaded.chart"
          v-show="viewMode === 'chart'"
          class="skills"
        />

        <Table
          v-if="isSkillComponentLoaded.table"
          v-show="viewMode === 'table'"
          class="skills"
        />

        <Raw
          v-if="isSkillComponentLoaded.raw"
          v-show="viewMode === 'raw'"
          class="skills"
        />
        <noscript>
          Can't show with JavaScript turned off
        </noscript>
      </div>
    </div>

    <hr>

    <h2>Timeline</h2>
    <p>
      All my life was the game of opposites:
      <ul class="opposites">
        <li>
          <i>As a kid I was obsessed with 3D modeling and animation, because 2D was boring: </i>
          <b>I ended up with the gallery full of drawings on DeviantArt.</b>
        </li>
        <li>
          <i>I joined a college rock-band to play on keys, because I was not really interested in all this rock'n'roll stuff: </i>
          <b>I ended up writing, arranging, singing, guitaring, recording and mixing alternative indie rock.</b>
        </li>
        <li>
          <i>On the web I identified myself as a designer, definitely not a coder, because it's not creative enough work: </i>
          <b>as you probably suggested, I ended up as a front-end developer.</b>
        </li>
        <li>
          <i>Once in the office, it was clear to me that I'm the tech guy, having nothing in common with these strange managers: </i>
          <b>guess what I'm interested in right now?</b>
        </li>
      </ul>
    </p>
    <p>
      The following is the illustrated timeline of the most significatn activities in the recent years.
    </p>

    <div class="timeline-container">
      <Timeline v-if="showTimeline" />
      <noscript>
        Can't show with JavaScript turned off
      </noscript>
    </div>

    <hr>

    <h2>This site</h2>
    <p>
      <b>Design</b>
      – well, for my on projects I omit design, jumping from structural pencil sketch right into coding and styling.
      it gives me more flexibility and freedom in making desing choices as well as it increases the speed.
    </p>
    <p>
      <b>Vue</b>
      – honestly, I wanted to give Nuxt.js a try for this one,
      but it was so preconfigured and I so much wanted to setup the whole project,
      so I used clean Vue + Vue-router + Vuex, without even Vue-CLI. As you already should know, Vue is my favorite framework.
    </p>
    <p>
      <b>Billboard</b>
      – not almighty yet best that I managed to find declarative chart library on top of the last vesrion of D3.
    </p>
    <p>
      <b>Tabulator</b>
      – quite powerfull lib for tables, with sorting, filtering and formatting. Now, as they dropped jQuery, I decided to give it a try.
    </p>
    <p>
      <b>Anime</b>
      – so far it works great for lighrweigt animations, it's small, simple and open-surced.
    </p>
    <p>
      <b>CSS grids</b>
      – althoug I prefer flexbox in most cases, grids are good for comlex irregular layouts, so I used them for portfolio gallery.
    </p>
    <p>
      <b>Browser support</b>
      – tested down to IE11, it mostly works fine, despite using CSS grids and some ES7 features
      <i>(Array.includes, Object.entries)</i>,
      thanks to polyfills and
      <i>@supports()</i> trick.
    </p>
    <p>
      <b>SEO</b>
      – pre-rendering is enough for static sites like this one, and SSR would be overmuch.
      And with microdata, meta tags, proper headers and content length I hope it would be indexed well enough.
    </p>
    <p>
      <b>Webpack</b>
      – it was the first time I set up webpack completeley from ground up,
      with pre-rendering, an dynamic import of components.
      Works fine but development mode is petty messy,
      you can examine Bundle Analyzer report
      <a
        href="./report.html"
        target="_blank"
      >here</a>.
    </p>
    <p>
      <b>Netlify</b>
      – just a wonderful way to host static and serverless applications, I use them since their early days.
    </p>
  </main>
</template>

<script>
import LoadingComponent from '@/components/Loading.vue'
import ErrorComponent from '@/components/Error.vue'

export default {
  name: 'Frontend',
  components: {
    Chart: () => ({
      component: import(/* webpackChunkName: 'chart', webpackPrefetch: true */ '@/components/Chart.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    }),
    Table: () => ({
      component: import(/* webpackChunkName: 'table', webpackPrefetch: true */ '@/components/Table.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    }),
    Raw: () => ({
      component: import(/* webpackChunkName: 'raw', webpackPrefetch: true */ '@/components/Raw.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    }),
    Timeline: () => ({
      component: import(/* webpackChunkName: 'timeline', webpackPrefetch: true */ '@/components/Timeline.vue'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: 0,
      timeout: 25000
    })
  },
  data  () {
    return {
      tldrImage: false,
      tldrImageSrc: '',
      viewMode: 'chart',
      isSkillComponentLoaded: { chart: false, table: false, raw: false },
      showSkillsContainer: false,
      showTimeline: false
    }
  },
  metaInfo () {
    return {
      title: 'frontend'
    }
  },
  mounted () {
    this.loadSkillComponent('chart')
    window.addEventListener('scroll', this.loadSkills)
    window.addEventListener('scroll', this.loadTimeline)
    setTimeout(() => { this.tldrImageSrc = '../assets/images/peacock.gif' }, 1000) // lazy loading
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.loadTimeline)
  },
  methods: {
    hideSkills (callback) {
      this.$anime({
        targets: '.skills',
        translateY: 50,
        opacity: 0,
        filter: this.$store.state.showEffects ? 'blur(5px)' : false,
        duration: 200,
        easing: 'easeInSine',
        complete: callback
      })
    },
    showSkills () {
      this.$anime({
        targets: '.skills',
        translateY: -50,
        duration: 0
      })
      this.$anime({
        targets: '.skills',
        translateY: 0,
        opacity: 1,
        filter: this.$store.state.showEffects ? 'blur(0px)' : false,
        duration: 300,
        easing: 'easeOutBack'
      })
    },
    loadSkillComponent (type) {
      this.hideSkills(() => {
        this.$store.dispatch('loadSkills').then(() => {
          this.isSkillComponentLoaded[type] = true
          this.viewMode = type
          this.showSkills()
        })
      })
    },
    loadSkills (e) {
      let skills = document.querySelector('.skills-container').getBoundingClientRect().top
      if (skills - window.innerHeight < 0) {
        this.showSkillsContainer = true
        window.removeEventListener('scroll', this.loadSkills)
      }
    },
    loadTimeline (e) {
      let timeline = document.querySelector('.timeline-container').getBoundingClientRect().top
      if (timeline - window.innerHeight < 0) {
        this.showTimeline = true
        window.removeEventListener('scroll', this.loadTimeline)
      }
    }
  }
}
</script>

<style lang="scss">

.skill-controls {
  margin: 0 auto 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.tldr-image {
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
}

.opposites li {
  margin: 15px 0;
}

</style>
