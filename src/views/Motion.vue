<template>
  <main>
    <h2>Gallery</h2>
    <Gallery />
  </main>
</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'Motion',
  components: {
    Gallery
  },
  metaInfo () {
    return {
      title: 'motion'
    }
  }
}
</script>

<style>
  .b {
    color: #484;
  }
</style>
