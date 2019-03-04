<template>
  <main>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dicta, recusandae eligendi facere eos, vero et ipsam officia fuga natus cupiditate asperiores. Deleniti illum omnis impedit! Temporibus accusantium voluptates ipsam.</p>
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
