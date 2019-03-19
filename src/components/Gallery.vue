<template>
  <section class="gallery">
    <div class="gallery-chunk">
      <video
        width="100%"
        controls
        preload="none"
        onclick="this.play()"
        poster="../assets/video/p_meyoudemo_poster.jpg"
        class="one"
      >
        <source
          src="../assets/video/p_meyoudemo.mp4"
          type="video/mp4"
        >
      </video>
      <p class="two">
        Explanaition demo with different presentation modes and with customisable colors, images and language.
        All animation made with SVG and GSAP, assembled with Vue components.
      </p>
      <iframe
        frameborder="0"
        allowfullscreen="allowfullscreen"
        src="https://www.youtube.com/embed/9r8w89_q8js?rel=0&showinfo=0"
        class="three"
      />
      <p class="four">
        Video prototype of interactive comics made in Fluffy Move experimental studio.
      </p>
      <video
        width="100%"
        controls
        preload="none"
        onclick="this.play()"
        poster="../assets/video/p_lbo_poster.jpg"
        class="five"
      >
        <source
          src="../assets/video/p_lbo.mp4"
          type="video/mp4"
        >
      </video>
      <p class="six">
        New design and interfaces for full refactoring of dynamic visualisation engine.
        Was built in collaboration with Pavel Kityan on Angular 1.6.
      </p>
      <video
        width="100%"
        controls
        preload="none"
        onclick="this.play()"
        poster="../assets/video/p_lng_poster.jpg"
        class="seven"
      >
        <source
          src="../assets/video/p_lng.mp4"
          type="video/mp4"
        >
      </video>
      <p class="eight">
        Interactive SVG map and dynamic visualisation of strategic infrastructure project.
      </p>
    </div>

    <div class="gallery-chunk">
      <Slider
        v-slot="{ curent }"
        :total="3"
        class="one"
      >
        <iframe
          v-if="curent === 1"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          src="//coub.com/embed/1006a2?muted=false&autostart=false&originalSize=false&startWithHD=true"
        />
        <iframe
          v-if="curent === 2"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          src="//coub.com/embed/106hzg?muted=false&autostart=false&originalSize=false&startWithHD=true"
        />
        <iframe
          v-if="curent === 3"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          src="//coub.com/embed/107xfa?muted=false&autostart=false&originalSize=false&startWithHD=true"
        />
      </Slider>
      <p class="two">
        Some short music videos.
      </p>
      <video
        width="100%"
        controls
        preload="none"
        onclick="this.play()"
        poster="../assets/video/p_meat_poster.jpg"
        class="three"
      >
        <source
          src="../assets/video/p_meat.mp4"
          type="video/mp4"
        >
      </video>
      <p class="four">
        Business game for students of Faculty of Economics of Lomonosov Moscow State University.
      </p>
      <video
        width="100%"
        controls
        preload="none"
        onclick="this.play()"
        poster="../assets/video/p_hotel_poster.jpg"
        class="five"
      >
        <source
          src="../assets/video/p_hotel.mp4"
          type="video/mp4"
        >
      </video>
      <p class="six">
        Business game for CFOs of subsidiary companies of AFK Sistema, was built in callaboration with risk management department of PwC Russia.
      </p>
      <Slider
        v-slot="{ curent }"
        :total="4"
        class="seven"
      >
        <iframe
          v-if="curent === 1"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827509104187814%2F&show_text=0&width=560"
        />
        <iframe
          v-if="curent === 2"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827510357521022%2F&show_text=0&width=560"
        />
        <iframe
          v-if="curent === 3"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827511114187613%2F&show_text=0&width=560"
        />
        <iframe
          v-if="curent === 4"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827512967520761%2F&show_text=0&width=560"
        />
      </Slider>
      <p class="eight">
        Short sketches from Tel-Aviv for Facebook & Instagram.
      </p>
    </div>

    <div class="gallery-chunk">
      <iframe
        frameborder="0"
        allowfullscreen="allowfullscreen"
        src="https://www.youtube.com/embed/sW_qMY44Rn0?rel=0&showinfo=0"
        class="one"
      />
      <p class="two">
        Video promo for mini footbal championship.
      </p>
      <iframe
        frameborder="0"
        allowfullscreen="allowfullscreen"
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFluffymove%2Fvideos%2F678951658912009%2F&show_text=0&width=560"
        class="three"
      />
      <p class="four">
        Totally five 3-minute cartoons, two 50-minute animated LED-background were made for children live shows at «Golden Ring» theatre. Director & Animator: Jane Nitylkina.
      </p>
      <iframe
        frameborder="0"
        allowfullscreen="allowfullscreen"
        src="https://www.youtube.com/embed/4CKd5VbJU-M?rel=0&showinfo=0"
        class="five"
      />
      <p class="six" />
      <iframe
        frameborder="0"
        allowfullscreen="allowfullscreen"
        src="https://www.youtube.com/embed/LuZ9xPAC82M?rel=0&showinfo=0"
        class="seven"
      />
      <p class="eight">
        Short film by Leo Nekrasov.
      </p>
    </div>

    <div class="gallery-chunk">
      <video
        width="100%"
        controls
        preload="none"
        onclick="this.play()"
        poster="../assets/video/p_whatif_poster.jpg"
        class="one"
      >
        <source
          src="../assets/video/p_whatif.mp4"
          type="video/mp4"
        >
      </video>
      <p class="two">
        First implementation of interactive infographics as a presentation tool for financial modeling.
      </p>
      <iframe
        frameborder="0"
        allowfullscreen="allowfullscreen"
        src="https://www.youtube.com/embed/-LKNRQJnk8o?rel=0&amp;showinfo=0"
        class="three"
      />
      <p class="four">
        First video prototype of interactive infographics.
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
/* for IE */
.gallery {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 0 20px;
  }

}

.gallery-chunk {
    text-align: left;
    display: block;
    max-width: 600px;
    margin: 0 auto;

    p {line-height: 1.5;}
    img {width: 100%;}

    iframe {
      width: 100%;
      height: 400px;
    }
}

/* for modern */
@supports(grid-area: auto) {

  .gallery-chunk {
    display: grid;
    max-width: none;
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

    p {margin: 10px 10px 60px;}
    iframe {height: 250px;}

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
      iframe {height: 400px;}
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
      iframe {height: 350px;}
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
      iframe {height: 300px;}
    }

    @media (min-width: 1280px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas:
        ". one one two . four"
        ". one one . three three"
        "five five five . three three"
        "five five five six . ."
        ". eight seven seven seven ."
        ". . seven seven seven .";

      .three {margin: 0;}
      .four {align-self: end;}
      .five {margin: 0 0 120px;}
    }
  }
}
</style>
