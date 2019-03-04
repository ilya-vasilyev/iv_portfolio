<template>
  <main class="minimalism">

    <p>
      This page is the collection of life <b>principles</b>, which help to go through it.
      Some call this lifestyle a <b>minimalism</b>, this sounds nice and feels right.
      It's not only about Scandinavian interior design, it's about finding a meaningful existence.
    </p>

    <section class="principles">
      <div
        v-for="(principle, i) in principles"
        :key="i"
        class="principle">
        <h2>{{principle.title}}</h2>
        <small>{{principle.description}}</small>
      </div>
    </section>

  </main>
</template>

<script>

export default {
  name: 'Minimalism',
  data () {
    return {
      principles: [
        { title: 'work remotely', description: 'be anywhere, keep a healthy work/life balance, become more effective and future-proof' },
        { title: 'communicate asynchronously', description: 'what can be more frustrating than being forced out of your own context into another, or being disturbed by some insignificant matters?' },
        { title: 'functionality first', description: 'the beauty of things in their functionality, I never understood purely decorative elements' },
        { title: 'experience over ownership', description: 'ownership can\'t give you such a spectrum of emotions as experiences can, shared economy is approaching' },
        { title: 'no impulsive acquisitions', description: 'only possess what you really need, ideally, more than once' },
        { title: 'durability over fashion', description: 'prefer high-quality and sustainable things, repair broken things, renew things only when their lifetime is over' },
        { title: 'go brand-less', description: 'don\'t become free walking ad' },
        { title: 'only buy what you can afford', description: 'avoid debt at all costs, unless it contributes to productivity growth or capital investment' },
        { title: 'invest in productivity growth', description: 'businesses invest in productivity growth, so should an individual' }
      ]
    }
  },
  metaInfo() {
    return {
      title: 'minimalism'
    }
  }
}
</script>

<style lang="scss">
.minimalism {
  margin: 0 auto;

  .principles {
    max-width: 900px;
    margin: 60px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }
 

  .principle {
    width: 300px;
    height: 200px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h2 {margin: auto;}
    small {height: 100px;}
  }

}
</style>
