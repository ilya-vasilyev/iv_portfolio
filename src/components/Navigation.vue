<template>
  <nav>
    <router-link
      v-for="el in nav"
      :key="el.to"
      :to="{ name: el.to }"
      :style="{letterSpacing: el.spacing + 'px'}"
      :selected="el.to === $route.name"
      class="router-link"
      @click.native="scrollTop()"
    >
      {{ el.text }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: function () {
    return {
      nav: [
        { to: 'frontend', text: 'frontend dev', spacing: 14 },
        { to: 'motion', text: 'motion designer', spacing: 9 },
        { to: 'minimalism', text: 'minimalist', spacing: 19 }
      ]
    }
  },
  methods: {
    scrollTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
