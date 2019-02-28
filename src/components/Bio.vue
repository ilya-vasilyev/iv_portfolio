<template>
  <div class="bio" itemscope itemtype="http://schema.org/Person">

    <div class="key">
      <small>first name</small>
    </div>
    <div class="value">
      <span itemprop="name">Ilya</span>
      <span aria-hidden="true">[iːl'jɑː]</span>
      <i @click="loadAudio('firstName')" >▣</i>
    </div>

    <div class="key">
      <small>last name</small>
    </div>
    <div class="value">
      <span>Vasilyev</span>
      <span aria-hidden="true">[væs'iːljeəv]</span>
      <i @click="loadAudio('lastName')" >▣</i>
    </div>

    <div class="key">
      <small>age</small>
    </div>
    <div class="value">
      <span>{{ age }}</span>
    </div>

    <div class="key">
      <small>from</small>
    </div>
    <div class="value">
      <span>Moscow, Russia</span>
      <i>▣</i>
    </div>

    <div class="key">
      <small>languages</small>
    </div>
    <div class="value">
      <span>English, Russian</span>
    </div>
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
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;

  i {user-select: none;}

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
}
</style>
