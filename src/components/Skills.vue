<template lang='pug'>
  div
    h2 Skills
    div.container
      div(v-for="skill in skills" :class="[ skill.width ]").item
        h3 {{ skill.name }}
        b
          span(v-for="star in skill.stars" v-html="SVGstar" @click="dropStar" @contextmenu.prevent="dropStar")
        small {{ skill.desc }}
    i(v-if="dropedStars > 5") You just knocked down {{dropedStars}} stars of my experience. Well done!
    hr
</template>

<script>

export default {
  name: 'skills',
  data () {
    return {
      skills: [
        {name: "Visualization", stars: 5, desc: "I try to visualize everything, for both understanding and explaining the cause", width: 'w100'},
        {name: "HTML / CSS", stars: 4, desc: "always adaptive and mobile first", width: 'w50'},
        {name: "Animation", stars: 4, desc: "from motion design to web animations", width: 'w50'},
        {name: "JavaScript", stars: 3, desc: "Vanilla, Vue, SVG, GSAP, D3, Electron, Babylon", width: 'w33'},
        {name: "Startup", stars: 3, desc: "MVP, CAC, LTV, Business model canvas", width: 'w33'},
        {name: "Futurology", stars: 3, desc: "only future proof technologies and ideas are worthy", width: 'w33'},
        {name: "UI + UX", stars: 3, desc: "understanding of irrational human behaviour is essential", width: 'w25'},
        {name: "Backend dev", stars: 2, desc: "can deal with Node, understand Feathers, REST, websockets", width: 'w25'},
        {name: "Marketing", stars: 2, desc: "know something about attention, retention, funnels", width: 'w25'},
        {name: "Financial", stars: 2, desc: "some experience in predictive analytics, financial statements", width: 'w25'},
        {name: "Photo", stars: 3, desc: "prefer manual mode on camera, can do photo editing and photo manipulations", width: 'w33'},
        {name: "Video", stars: 3, desc: "worked with camera, editing, motion design, VFX", width: 'w33'},
        {name: "Sound / Music", stars: 3, desc: "know how to get from idea to master track, in film and music", width: 'w33'},
        {name: "Computer science", stars: 1, desc: "trying to wrap my head around machine learning and neural networks", width: 'w25'},
        {name: "Sales", stars: 1, desc: "can setup CRM or write a script, know that ignoring is not a «No»", width: 'w25'},
        {name: "Working", stars: 3, desc: "sprinter, good at short, highly tense distances with too much variables", width: 'w25'},
        {name: "Communication", stars: 2, desc: "they call me Sheldon, I don't get it", width: 'w25'},
      ],
      SVGstar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510"><path shape-rendering="geometricPrecision" d="M255 402.2l157.6 95L371 318l139-120.5-183.4-15.8-71.6-169-71.6 169L0 197.5 139 318 97.5 497.3"/></svg>',
      dropedStars: 0,
    }
  },
  created: function() {
    window.scrollTo(0, 0);
  },
  methods: {
    dropStar: function(e) {
      let star = e.target.tagName == "path" ? e.target.parentNode.parentNode : ( e.target.tagName == "svg" ? e.target.parentNode : e.target ) // because span>svg>path
      star.style.transition = 'opacity 0.5s, transform 1s'
      star.style.opacity = 0
      star.style.transform = 'scaleY(0.5) translateY(400px)'
      setTimeout(function () {
        star.style.transform = 'scaleY(1) translateY(0)'
      }, 2000)
      setTimeout(function () {
        star.style.opacity = 1
      }, 8000)
      this.dropedStars++
    },
  },
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

.w100 {width: 100%}
.w50 {width: 50%}
.w33 {width: 33%}
.w25 {width: 25%}

.container {
  @include flex(row, center, stretch, wrap);

  .item {
    @include flex(column, flex-start, center, nowrap);
    min-width: 150px;
    margin: 1rem 0;

    h3 {
      padding: 0 .5rem;
      font-weight: 300;
      margin: 0;
    }
    b {
      padding: 0 .5rem;

      span {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        margin: .1rem;
        fill: $baseColor;
      }
    }
    small {
      max-width: 200px;
      padding: 0 .5rem;
      // text-align: left;
    }
  }
}

</style>
