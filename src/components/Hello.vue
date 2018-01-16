<template lang='pug'>
  div
    h2 It's Ilya
    p I'm a #[b(v-tooltip="tooltips[0]") frontend developer]. Kind of. Because I was learning #[b(v-tooltip="tooltips[1]") UI] and #[b(v-tooltip="tooltips[2]") UX] while working as a #[b(v-tooltip="tooltips[3]") designer], when I realized that I need #[b(v-tooltip="tooltips[4]") HTML and CSS]. Then #[b(v-tooltip="tooltips[5]") JavaScript] happened to me. With all forms of animations and interactivity.
    p All this resulted in my own startup. We produced #[b(v-tooltip="tooltips[6]") Dynamic visualisation] of #[b(v-tooltip="tooltips[7]") Financial models], that was a surprising twist to math, statistics and fin modeling.
    p At the same time I was involved in several non-coding projects like:
      br
      | #[b(v-tooltip="tooltips[8]") Sound production], #[b(v-tooltip="tooltips[9]") Audio recording and mixing], #[b(v-tooltip="tooltips[11]") Video production] and #[b(v-tooltip="tooltips[12]") Motion design]. All within film and animation industry.
    h3.tldr TL;DR: I'm the coder with broad cross discipline experience, focused on visualisation
    hr
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      tooltips: [
        "although, familiar with basics of backend",
        "how it looks",
        "how it feels",
        "like drawing apps in Photoshop, then explaining how it suppose to work",
        "to control how my design looks",
        "to control how my design works",
        "you manipulate input parameters of fin model to see simulated results of possible outomes in real time",
        "now I know how leveraged buyout works and what is terminal value",
        "like music composing, songwriting, instrumental arrangement",
        "drums, bass, guitars, vocals, both live and in studio",
        "",
        "from camera to rendering",
        "including animation, visual effects and post-production",
        "",
      ],
    }
  },
  created: function() {
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

h2, h3 {
  padding: 3rem 0;
}
p {
  text-align: left;
}
b {
  transition: .2s;
  cursor: default;
	display: inline-block;
  &:hover {
    color: $baseColor;
  }
}

.tldr {
  color: $baseColor;
}

</style>
