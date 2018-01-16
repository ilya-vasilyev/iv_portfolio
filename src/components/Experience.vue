<template lang='pug'>
  div
    h2 Experience
    div.container
      div(v-for="(experience, index) in timeline"
          @click="expandedDetails = experience.details ? index : -1"
          :class="{expanded: expandedDetails == index}"
          :style="{cursor: experience.details ? 'pointer' : 'default'}").card
        div(:style=" { backgroundImage: 'url(../static/' + experience.pic + ')' } ").pic
        h3(v-if="experience.name") {{experience.name}}
        h4(v-if="experience.year") {{experience.year}}
        small(v-if="experience.year") {{experience.text}}
        div(v-if="experience.details").details
          button(@click="closeDetails").close &#10060;
          div(v-for="detail in experience.details").detail
            p(v-if="detail.text") {{detail.text}}
            a(v-if="detail.button && detail.href" v-bind:href="detail.href" target="_blank").likeButton {{detail.button}}
    hr
</template>

<script>

export default {
  name: 'Experience',
  data () {
    return {
      timeline: [
        // {
          // name: "...",
          // year: 2017,
          // text: "...",
          // pic: '',
          // details: [
          //   {text: "...", button: "Link", href:"./"},
          // ],
        // },
        {
          name: "Freelance coding",
          year: 2017,
          text: "Some small projects made as a frontend developer",
          pic: 'exp_code.jpg',
          // details: [
          //   {text: ""},
          // ],
        },
        {
          name: "MeYou",
          year: 2017,
          text: "Second cooperation with event networking startup. This time in a more frontend way",
          pic: 'exp_meyou_again.jpg',
          details: [
            {text: "Interactive product demos, internal tools, interface refactoring, new products"},
          ],
        },
        {
          name: "PULSE.visuals",
          year: 2017,
          text: "Dynamic visualisations of finatial models (reformation and rebranding of PLAIN.solutions)",
          pic: 'exp_pulse.jpg',
          details: [
            {text: "New approach to value proposition and customer segments"},
          ],
        },
        {
          name: "Winning of the Garage48 hackathon",
          year: 2015,
          text: "This was the my first and the only hackathon. I joined a wonderful team of architects and we won it",
          pic: 'exp_garage.jpg',
          details: [
            {text: "Prototype bootstrapping"},
            {text: "Designing the interface"},
            {text: "HTML, CSS, JS"},
          ],
        },
        {
          name: "PLAIN.solutions",
          year: 2014,
          text: "Dynamic visualisations of finatial models. The startup was founded by me and two executives from banking and oil industry. Real coding started here",
          pic: 'exp_plain.jpg',
          details: [
            {text: "Several big cliens like PwC, Analytical Center, OTLK, Moscow State University"},
          ],
        },
        {
          name: "MeYou",
          year: 2014,
          text: "First cooperation with service for networking on events. It was my first steps into web design, HTML and CSS",
          pic: 'exp_meyou.jpg',
          details: [
            {text: "Design and prototypes of all new interfaces"},
            {text: "Help with organizing a series of tech meetups"},
            {text: "A lot of networking"},
          ],
        },
        {
          name: "Animation",
          year: 2014,
          text: "I was involved in production of cartoons fully packed with traditional animation and motion design for children live shows",
          pic: 'exp_cartoons.jpg',
          details: [
            {text: "3 short cartoons in 2014"},
            {text: "2 short cartoons in 2016"},
            {text: "1 animated LED-background in 2017"},
          ],
        },
        {
          name: "Fluffy Move Studio",
          year: 2013,
          text: "Experimental project about interactive comics, cartoons and web animation",
          pic: 'exp_fluffy.jpg',
          details: [
            {text: "Product prototypes and trailers"},
            {text: "Web experiments"},
            {text: "Content marketing"},
          ],
        },
        {
          name: "Films",
          year: 2012,
          text: "My relation with cinematography is happened to be mainly in the sound and music area",
          pic: 'exp_films.JPG',
          details: [
            {text: "Mixed puppet/stop-motion short film"},
            {text: "Full length feature film"},
            {text: "Documentary film"},
          ],
        },
        {
          name: "Music",
          year: 2009,
          text: "I've played in my own alternative-indie-rock band",
          pic: 'exp_fake.jpg',
          details: [
            {text: "We've done plenty of live performances and made some studio recordings"},
            {text: "Also I had a lot of sound engineering practice with other bands, both in studio and on stage"},
            {text: "Real underground"},
          ],
        },
      ],
      expandedDetails: -1,
    }
  },
  created: function() {
    window.scrollTo(0, 0);
  },
  methods: {
    closeDetails: function () {
      const self = this
      this.$nextTick(function () {
        self.expandedDetails = -1
      })
    },
  },
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

.container {
  @include flex(column, flex-start, stretch, nowrap);

  .card {
    // width: calc(100% - 5rem);
    min-height: 15rem;
    color: #fff;
    position: relative;
    background: #383842;
    padding-right: 5rem;
    margin-bottom: 2px;
    overflow: hidden;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    &:hover .pic {
      transform: scale(1.1);
      opacity:.75;
     	filter: grayscale(0);
     }

    .pic {
      opacity: .4;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      transition: transform 20s, opacity 3s, filter 2s;
      transition-timing-function: ease-in-out;
    	filter: grayscale(.5);
    }
    h3 {
      text-align: left;
      margin: 1rem;
      position: relative;
    }
    h4 {
      position: absolute;
      right: .5rem;
      top: 0;
      margin: 0;
      opacity: .25;
      font-size: 3rem;
      @media screen and (max-width: 500px) {
        font-size: 2rem;
        transform: rotate(-90deg);
        transform-origin: 80% 60%;
      }
    }
    small {
      position: relative;
      display: block;
      width: 50%;
      text-align: left;
      color: #ccc;
      margin: 1rem;
      text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
      @media screen and (max-width: 500px) {
        width: auto;
      }
    }
    .details {
      @include flex(row, center, center, wrap);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(50,50,50,.8);
      color: #fff;
      pointer-events: none;
      opacity: 0;
      transform: scale(.95);
      transition: opacity .2s, transform .2s;
      overflow-y: auto;
      cursor: default;
      .detail {
        flex-basis: 200px;
        margin: 0 .5rem;

        p {
          line-height: 1.25;
          margin: 0 .5rem
        }
      }

      button.close {
        position: absolute;
        // width: 1.5rem;
        // height: 1.5rem;
        top: 0;
        right: 0;
        margin: 0;
        font-weight: 300;
        font-size: 1.5rem;
        background: none;
        text-decoration: none;
      }
    }

    &.expanded {
      .pic { filter: blur(5px) }
      h3,h4,small { opacity: 0 }
      .details {
        pointer-events: all;
        opacity: 1;
        transform: scale(1);
       }
    }
  }
}

</style>
