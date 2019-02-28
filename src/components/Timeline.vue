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
      <button
        class="arrow left"
        @click="scrollTimeline(`-=${ windowWidth() }`)"
      />
      <button
        class="arrow right"
        @click="scrollTimeline(`+=${ windowWidth() }`)"
      />
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
      lockScroll: false,
      timeout: null
    }
  },
  mounted () {
    dragscroll.reset()
    this.$refs.timeline.addEventListener('scroll', this.scroller, false)
  },
  methods: {
    scroller (e) {
      if (this.timeout) window.cancelAnimationFrame(this.timeout)
      this.timeout = window.requestAnimationFrame(() => {
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
    },
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
  margin: 30px auto 0;
  display: flex;
  justify-content: center;

  .arrow {
    width: 80px;
    height: 80px;
    border-radius: 60px;
    background: 50% 50% no-repeat;
    background-size: 40px 40px;
    margin: 0 10px;

    &.left {
      background-image: url('../assets/images/left.svg');
    }

    &.right {
      background-image: url('../assets/images/right.svg');
    }
  }

  &[lockScroll] {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
