<template>
  <div class="bio">

    <p class="row">
      <small class="key">
        first name
      </small>
      <span class="value">
        <span itemprop="name">Ilya</span>
        <span aria-hidden="true" class="transcription">[iːl'jɑː]</span>
        <i @click="loadAudio('firstName')" class="icon speaker" />
      </span>
    </p>

    <p class="row">
      <small class="key">
        last name
      </small>
      <span class="value">
        <span>Vasilyev</span>
        <span aria-hidden="true" class="transcription">[væs'iːljeəv]</span>
        <i @click="loadAudio('lastName')" class="icon speaker" />
      </span>
    </p>

    <p class="row">
      <small class="key">
        age
      </small>
      <span class="value">
        {{ age }}
      </span>
    </p>

    <p class="row">
      <small class="key">
        from
      </small>
      <span class="value">
        Moscow, Russia
        <a
          href="https://www.google.com/maps/place/Moscow/"
          target="_blank"
          tabindex="-1">
          <i class="icon globe" />
        </a>
      </span>
    </p>

    <p class="row">
      <small class="key">
        languages
      </small>
      <span class="value">
        English, Russian
      </span>
    </p>
    <!-- <div
      itemscope
      itemtype="http://schema.org/Person">
      hi, my name is
      <span itemprop="name">Ilya</span>
      and I'm a
      <span itemprop="disambiguatingDescription">frontend web developer</span>
    </div> -->
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
  mounted() {
    this.$options.firstName = new Audio(require('../assets/audio/first_name.mp3'))
    this.$options.lastName = new Audio(require('../assets/audio/last_name.mp3'))
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
  margin: 30px 0;

  a {
    margin: 0;
		line-height: 0;
  }

  .row {
    width: 100%;
    margin: 0;
    display: flex;
    align-items: flex-end;
  }

  .key {
    width: 30%;
    padding: 10px;
    text-align: right;
  }

  .value {
    width: 70%;
    padding: 10px;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .transcription {
    opacity: 0.6;
    margin-left: 10px;
  }

  .icon {
    user-select: none;
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-left: 10px;
    background: 50% 50% no-repeat;
    background-size: contain;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }

    &.speaker {
      background-image: url('../assets/images/speaker.svg');
    }

    &.globe {
      background-image: url('../assets/images/globe.svg');
    }
  }
}
</style>
