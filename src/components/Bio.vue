<template>
  <div class="bio">
    <hr class="no-margin">
    <br>
    <p class="row">
      <small class="key">first name</small>
      <span class="value">
        <span itemprop="givenName">Ilya</span>
        <span
          aria-hidden="true"
          class="transcription"
          @click="loadAudio('firstName')"
        >/iːl'jɑː/</span>
      </span>
    </p>

    <p class="row">
      <small class="key">last name</small>
      <span class="value">
        <span itemprop="familyName">Vasilyev</span>
        <span
          aria-hidden="true"
          class="transcription"
          @click="loadAudio('lastName')"
        >/væs'iːljeəv/</span>
      </span>
    </p>

    <p class="row">
      <small class="key">age</small>
      <span class="value">{{ age }}</span>
    </p>

    <br>

    <p class="row">
      <small class="key">from</small>
      <span class="value">Moscow, Russia</span>
    </p>

    <p class="row">
      <small class="key">languages</small>
      <span class="value">English, Russian</span>
    </p>

    <br>

    <p class="row">
      <small class="key">Big Five personality traits:</small>
      <span class="value" />
    </p>

    <p class="row">
      <small class="key">– openness to experience</small>
      <span class="value">100%</span>
    </p>

    <p class="row">
      <small class="key">– agreeableness</small>
      <span class="value">71%</span>
    </p>

    <p class="row">
      <small class="key">– conscientiousness</small>
      <span class="value">67%</span>
    </p>

    <p class="row">
      <small class="key">– neuroticism</small>
      <span class="value">63%</span>
    </p>

    <p class="row">
      <small class="key">– extraversion</small>
      <span class="value">46%</span>
    </p>

    <meta
      itemprop="gender"
      content="Male"
    >
    <meta
      itemprop="jobTitle"
      content="front-end developer"
    >
    <meta
      itemprop="image"
      content="/assets/ava.jpg"
    >
    <meta
      itemprop="disambiguatingDescription"
      content="front-end web developer, specialised in Vue.js, visualization, animation and interactivity, with entrepreneurial experience"
    >
    <meta
      itemprop="url"
      content="/"
    >
  </div>
</template>

<script>
export default {
  name: 'Bio',
  computed: {
    age () {
      let currentTime = new Date()
      return currentTime.getMonth() + 1 < 9
        ? currentTime.getFullYear() - 1991 - 1
        : currentTime.getFullYear() - 1991
    }
  },
  mounted () {
    setTimeout(() => {
      this.$options.firstName = new Audio(require('../assets/audio/first_name.mp3'))
      this.$options.lastName = new Audio(require('../assets/audio/last_name.mp3'))
    }, 1000)
  },
  methods: {
    loadAudio (file) {
      this.$options[file].play()
    }
  }
}
</script>

<style lang="scss">
.bio {
  width: 100%;
  margin: 0 0 15px;

  a {
    margin: 0;
    line-height: 0;
  }

  .row {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
  }

  .key {
    padding: 5px;
    white-space: normal;
  }

  .value {
    padding: 5px;
    display: flex;
    align-items: center;
  }

  .transcription {
    opacity: 0.7;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
