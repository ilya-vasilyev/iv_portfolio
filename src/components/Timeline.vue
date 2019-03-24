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
    this.$ga.event('interaction', 'load', 'timeline')
  },
  methods: {
    scroller (e) {
      this.$emit('interaction')
      if (this.timeout) window.cancelAnimationFrame(this.timeout)
      this.timeout = window.requestAnimationFrame(() => {
        this.progress = e.target.scrollLeft / (e.target.scrollWidth - window.innerWidth)
        this.$anime({
          targets: '.timeline .wrap .near',
          translateX: `${-260 * this.progress}vmin`,
          duration: 0
        })
        this.$anime({
          targets: '.timeline .wrap .mid',
          translateX: `${-130 * this.progress}vmin`,
          duration: 0
        })
      })
    },
    scrollTimeline (pos) {
      if (this.lockScroll) return
      this.$emit('interaction')
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
  margin: 60px auto;
  overflow-x: scroll;
  cursor: grab;

  .wrap {
    height: 80vmin;
    position: relative;
  }

  .far,
  .mid,
  .near {
    position: absolute;
    height: 80vmin;
    bottom: 0;
    left: 0;
    background: 0% 50% no-repeat;
    background-size: cover;
  }

  .far {
    width: 1020vmin;
    background-image: url('../assets/images/timeline_far.svg');
  }

  .mid {
    width: 1150vmin;
    background-image: url('../assets/images/timeline_mid.svg');
  }

  .near {
    width: 1280vmin;
    background-image: url('../assets/images/timeline_near.svg');
  }
}

.timeline-controls {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .arrow {
    width: 80px;
    height: 80px;
    border-radius: 40px;
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
