<template lang='pug'>
  div.workarea
    button(@click="$router.push('/')").white
      span.arrow
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 306")
          path(d="M247.3 35.7L211.7 0l-153 153 153 153 35.6-35.7L130 153")
      | Back to home page
</template>

<script>

export default {
  name: 'GoBack',
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

button {
  width: 100%;
  padding: 3rem 0;
  font-size: 1.2rem;
  font-weight: 300;
  transition: background-color .1s;
  &:hover {background-color: $lightColor}
  &:active {background-color: $lightColor}
}

.arrow svg {
  margin: 0 .25rem;
  vertical-align: middle;
  width: 1.2rem;
  height: 1.2rem;
  fill: $baseColor;
}
</style>
