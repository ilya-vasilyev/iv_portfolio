<template>
  <section class="gallery">
    <div class="gallery-chunk">
      <img
        src="https://iv.netlify.com/static/p_lng_cover.jpg"
        class="one"
      >
      <p class="two">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img
        src="https://iv.netlify.com/static/p_charts01.jpg"
        class="three"
      >
      <p class="four">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <Slider
        v-slot="{ curent }"
        :total="4"
        class="five"
      >
        <img
          v-if="curent === 1"
          src="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
        >
        <img
          v-if="curent === 2"
          src="http://sciencenordic.com/sites/default/files/imagecache/620x/413474560.jpg"
        >
        <img
          v-if="curent === 3"
          src="http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"
        >
        <img
          v-if="curent === 4"
          src="https://img.purch.com/rc/696x392/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMy83MjAvb3JpZ2luYWwvY2F0cy1idWJvbmljLXBsYWd1ZQ=="
        >
      </Slider>
      <p class="six">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img
        src="https://iv.netlify.com/static/p_creatomus00.jpg"
        class="seven"
      >
      <p class="eight">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>

    <div class="gallery-chunk">
      <img
        src="https://iv.netlify.com/static/p_lng_cover.jpg"
        class="one"
      >
      <p class="two">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img
        src="https://iv.netlify.com/static/p_charts01.jpg"
        class="three"
      >
      <p class="four">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img
        src="https://iv.netlify.com/static/p_meyoudemo_cover.jpg"
        class="five"
      >
      <p class="six">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img
        src="https://iv.netlify.com/static/p_creatomus00.jpg"
        class="seven"
      >
      <p class="eight">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
  name: 'Gallery',
  components: {
    Slider
  },
  data: function () {
    return {
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss">
.gallery {
  position: relative;
  z-index: 1;
  max-width: 1600px;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 0 20px;
  }

  p {
    line-height: 1.5;
  }
}

.gallery-chunk {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
     "one"
     "two"
     "three"
     "four"
     "five"
     "six"
     "seven"
     "eight";

  img {width: 100%;}
  p {margin: 10px 10px 60px;}

  .one {grid-area: one;}
  .two {grid-area: two;}
  .three {grid-area: three;}
  .four {grid-area: four;}
  .five {grid-area: five;}
  .six {grid-area: six;}
  .seven {grid-area: seven;}
  .eight {grid-area: eight;}

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
       "one one"
       "two ."
       "three three"
       ". four"
       "five five"
       "six ."
       "seven seven"
       ". eight";

     p {margin: 20px 20px 120px;}
  }

  @media (min-width: 800px) {
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    grid-template-areas:
       ". one one one"
       ". two two ."
       "three three three four"
       ". five five ."
       ". six six ."
       "seven seven seven ."
       ". eight eight .";

     .three {margin: 0 0 120px;}
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
       ". one one two ."
       "four four . five five"
       "three three . five five"
       "three three . six six"
       ". eight seven seven seven";

     .four {margin: 20px;}
     .one, .seven {margin: 0 0 120px;}
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
       ". one one two . four"
       ". one one . three three"
       "five five five . three three"
       "five five five six . ."
       ". . seven seven seven ."
       ". eight seven seven seven .";

     .three {margin: 0;}
     .four {align-self: end;}
     .five {margin: 0 0 120px;}
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
       "one one two . three three three"
       "one one . . three three three"
       "five five five . four four ."
       "five five five six . seven seven"
       ". . . . . eight eight";

     .three {margin: 0;}
     .four {margin: 0 0 120px;}
     .five {margin: 0;}
     .seven {margin: 0;}
  }

}
</style>
