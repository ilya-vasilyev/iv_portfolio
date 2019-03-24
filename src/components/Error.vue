<template>
  <div class="component-error">
    <span>can't load component...</span>
    <h3>¯\_(ツ)_/¯</h3>
    <button @click="reload()">Reload page</button>
  </div>
</template>

<script>
export default {
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>
