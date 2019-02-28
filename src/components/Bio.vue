<template>
  <div class="bio" itemscope itemtype="http://schema.org/Person">

    <p class="row">
      <small class="key">
        first name
      </small>
      <span class="value">
        <span itemprop="name">Ilya</span>
        <span aria-hidden="true">[iːl'jɑː]</span>
        <i @click="loadAudio('firstName')" >▣</i>
      </span>
    </p>

    <p class="row">
      <small class="key">
        last name
      </small>
      <span class="value">
        <span>Vasilyev</span>
        <span aria-hidden="true">[væs'iːljeəv]</span>
        <i @click="loadAudio('lastName')" >▣</i>
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
        <i>▣</i>
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

  .row {
    width: 100%;
    margin: 0;
    display: flex;
  }

  .key,
  .value {
    width: 50%;
    padding: 10px;
  }

  .key {
    text-align: right
  }

  .value {
    text-align: left;
  }

  i {user-select: none;}
}
</style>
