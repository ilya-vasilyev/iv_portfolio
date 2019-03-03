<template>
  <main>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nulla, illo praesentium est quam illum nesciunt ipsam labore aut incidunt voluptatibus repudiandae, iure assumenda! Exercitationem eius corporis temporibus iste placeat?</p>

    <section class="principle">
      <h2>Principle (consisted of few words)</h2>
      <small>some detailed description</small>
    </section>
    
    <section class="principle">
      <h2>Principle (consisted of few words)</h2>
      <small>some detailed description</small>
    </section>

    <section class="principle">
      <h2>Principle (consisted of few words)</h2>
      <small>some detailed description</small>
    </section>

    <section class="principle">
      <h2>Principle (consisted of few words)</h2>
      <small>some detailed description</small>
    </section>

  </main>
</template>

<script>

export default {
  name: 'Minimalism',
  metaInfo() {
    return {
      title: 'minimalism'
    }
  }
}
</script>

<style lang="scss">
.principle {
  margin: 60px 0 0;
  
  hr {
    margin: 20px auto;
  }
}
</style>
