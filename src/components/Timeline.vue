<template>
  <section>
    <div
      ref="timeline"
      class="timeline dragscroll"
    >
      <div class="wrap">
        <div class="far" />
        <div class="mid" />
        <div class="near" />
      </div>
    </div>
    <div
    class="timeline-controls"
    :lockScroll="lockScroll"
    >
    <button @click="scrollTimeline(`-=${ windowWidth() }`)">
      (L)
    </button>
    <button @click="scrollTimeline(`+=${ windowWidth() }`)">
      (R)
    </button>
  </div>
  </section>
</template>

<script>
import dragscroll from 'dragscroll' // eslint-disable-line

export default {
  name: 'Timeline',
  data: function () {
    return {
      progress: 0,
      lockScroll: false
    }
  },
  mounted () {
    let timeout
    this.$refs.timeline.addEventListener('scroll', (e) => {
      if (timeout) window.cancelAnimationFrame(timeout)
      timeout = window.requestAnimationFrame(() => {
        this.progress = e.target.scrollLeft / (e.target.scrollWidth - window.innerWidth)
        this.$anime({
          targets: '.timeline .wrap .near',
          translateX: `${-300 * this.progress}vmin`,
          duration: 0
        })
        this.$anime({
          targets: '.timeline .wrap .mid',
          translateX: `${-150 * this.progress}vmin`,
          duration: 0
        })
      })
    }, false)
  },
  methods: {
    scrollTimeline (pos) {
      if (this.lockScroll) return
      this.lockScroll = true
      this.$anime({
        targets: '.timeline',
        scrollLeft: pos,
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: () => { this.lockScroll = false }
      })
    },
    windowWidth () {
      return window.innerWidth
    }
  }
}
</script>

<style lang="scss">
.timeline {
  width: 100%;
  overflow-x: scroll;
  cursor: grab;

  .wrap {
    width: 8000px;
    height: 800px;
    width: 800vmin;
    height: 80vmin;
    position: relative;
  }

  .far,
  .mid,
  .near {
    position: absolute;
    width: 8000px;
    height: 800px;
    width: 800vmin;
    height: 80vmin;
    bottom: 0;
    left: 0;
    background: 50% 50% no-repeat;
    background-size: contain;
  }

  .far {
    /*background-image: url('../assets/images/timeline_far.svg');*/

  }

  .mid {
    /*background-image: url('../assets/images/timeline_mid.svg');*/
  }

  .near {
    background-image: url('../assets/images/timeline.svg');
  }
}

.timeline-controls {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  &[lockScroll] {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
