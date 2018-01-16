<template lang='pug'>
  div.workarea
    div.container

      div(@click="open('/skills')").item
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100").pic
          rect(x="2" y="70" width="17.6" height="5").svg-rect-1-1
          rect(x="2" y="70" width="17.6" height="5").svg-rect-1-2
          rect(x="2" y="70" width="17.6" height="5").svg-rect-1-3
          rect(x="2" y="70" width="17.6" height="5").svg-rect-1-4
          rect(x="2" y="70" width="17.6" height="5").svg-rect-1-5

          rect(x="21.6" y="70" width="17.6" height="5").svg-rect-1-6
          rect(x="21.6" y="70" width="17.6" height="5").svg-rect-1-7
          rect(x="21.6" y="70" width="17.6" height="5").svg-rect-1-8
          rect(x="21.6" y="70" width="17.6" height="5").svg-rect-1-9
          rect(x="21.6" y="70" width="17.6" height="5").svg-rect-1-10

          rect(x="41.2" y="70" width="17.6" height="5").svg-rect-1-11
          rect(x="41.2" y="70" width="17.6" height="5").svg-rect-1-12
          rect(x="41.2" y="70" width="17.6" height="5").svg-rect-1-13
          rect(x="41.2" y="70" width="17.6" height="5").svg-rect-1-14
          rect(x="41.2" y="60" width="17.6" height="5").svg-rect-1-15

          rect(x="60.8" y="70" width="17.6" height="5").svg-rect-1-16
          rect(x="60.8" y="70" width="17.6" height="5").svg-rect-1-17
          rect(x="60.8" y="70" width="17.6" height="5").svg-rect-1-18
          rect(x="60.8" y="60" width="17.6" height="5").svg-rect-1-19
          rect(x="60.8" y="50" width="17.6" height="5").svg-rect-1-20

          rect(x="80.4" y="70" width="17.6" height="5").svg-rect-1-21
          rect(x="80.4" y="70" width="17.6" height="5").svg-rect-1-22
          rect(x="80.4" y="60" width="17.6" height="5").svg-rect-1-23
          rect(x="80.4" y="50" width="17.6" height="5").svg-rect-1-24
          rect(x="80.4" y="40" width="17.6" height="5").svg-rect-1-25
        p.name Skills

      div(@click="open('/experience')").item
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100").pic
          rect(x="20" y="60" width="60" height="10").svg-rect-2-1
          rect(x="20" y="40" width="60" height="10").svg-rect-2-2
          rect(x="20" y="20" width="60" height="10").svg-rect-2-3
          rect(x="20" y="-30" width="60" height="10").svg-rect-2-4
          rect(x="20" y="-60" width="60" height="10").svg-rect-2-5
        p.name Experience

      div(@click="open('/portfolio')").item
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100").pic
          rect(x="20" y="15" width="15" height="15").svg-rect-3-1
          rect(x="43" y="15" width="15" height="15").svg-rect-3-2
          rect(x="67" y="15" width="15" height="15").svg-rect-3-3
          rect(x="20" y="38" width="15" height="15").svg-rect-3-4
          rect(x="43" y="38" width="15" height="15").svg-rect-3-5
          rect(x="20" y="62" width="15" height="15").svg-rect-3-6
          rect(x="110" y="40" width="15" height="15").svg-rect-3-7
          rect(x="110" y="110" width="15" height="15").svg-rect-3-8
          rect(x="40" y="110" width="15" height="15").svg-rect-3-9
        p.name Portfolio

    hr
</template>

<script>

export default {
  name: 'Nav',
  methods: {
    open: function (path) {
      this.$router.push(path)
    },
  },
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

.container {
  @include flex(row,center, center, nowrap);
  margin: 3rem 0;
  @media screen and (max-width: 500px) {
    @include flex(column,center, center, nowrap);
  }
  .item {
    width: 150px;
    height: 150px;
    margin: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-weight: 800;
    border: 1px solid #fff;
    transition: .2s;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    user-select: none;

    &:hover {
      color: $baseColor;
    }
    &:hover .pic .svg-rect {
      &-1-1  {transform: translate(0px, 4px) rotate(0deg) !important; fill: $baseColor; transition-delay: .00s;}
      &-1-2  {transform: translate(0px, -8px) rotate(2deg) !important; transition-delay: .02s;}
      &-1-3  {transform: translate(0px, -16px) rotate(-4deg) !important; transition-delay: .04s;}
      &-1-4  {transform: translate(0px, -24px) rotate(-2deg) !important; transition-delay: .06s;}
      &-1-5  {transform: translate(0px, -32px) rotate(3deg) !important; transition-delay: .08s;}

      &-1-6  {transform: translate(0px, 4px) rotate(0deg) !important; fill: $baseColor; transition-delay: .04s;}
      &-1-7  {transform: translate(0px, -10px) rotate(-6deg) !important; fill: $baseColor; transition-delay: .06s;}
      &-1-8  {transform: translate(0px, -20px) rotate(1deg) !important; transition-delay: .08s;}
      &-1-9  {transform: translate(0px, -30px) rotate(2deg) !important; transition-delay: .10s;}
      &-1-10 {transform: translate(0px, -40px) rotate(-5deg) !important; transition-delay: .12s;}

      &-1-11 {transform: translate(0px, 4px) rotate(0deg) !important; fill: $baseColor; transition-delay: .08s;}
      &-1-12 {transform: translate(0px, -12px) rotate(4deg) !important; fill: $baseColor; transition-delay: .10s;}
      &-1-13 {transform: translate(0px, -24px) rotate(-4deg) !important; fill: $baseColor; transition-delay: .12s;}
      &-1-14 {transform: translate(0px, -36px) rotate(2deg) !important; transition-delay: .14s;}
      &-1-15 {transform: translate(0px, -38px) rotate(5deg) !important; transition-delay: .16s;}

      &-1-16 {transform: translate(0px, 4px) rotate(0deg) !important; fill: $baseColor; transition-delay: .12s;}
      &-1-17 {transform: translate(0px, -14px) rotate(1deg) !important; fill: $baseColor; transition-delay: .14s;}
      &-1-18 {transform: translate(0px, -28px) rotate(2deg) !important; fill: $baseColor; transition-delay: .16s;}
      &-1-19 {transform: translate(0px, -32px) rotate(-3deg) !important; fill: $baseColor; transition-delay: .18s;}
      &-1-20 {transform: translate(0px, -36px) rotate(4deg) !important; transition-delay: .20s;}

      &-1-21 {transform: translate(0px, 4px) rotate(0deg) !important; fill: $baseColor; transition-delay: .16s;}
      &-1-22 {transform: translate(0px, -16px) rotate(6deg) !important; fill: $baseColor; transition-delay: .18s;}
      &-1-23 {transform: translate(0px, -22px) rotate(-2deg) !important; fill: $baseColor; transition-delay: .20s;}
      &-1-24 {transform: translate(0px, -28px) rotate(3deg) !important; fill: $baseColor; transition-delay: .22s;}
      &-1-25 {transform: translate(0px, -34px) rotate(-3deg) !important; fill: $baseColor; transition-delay: .24s;}

      &-2-1 {transform: translate(0px, 10px) rotate(1deg) !important; fill: $baseColor}
      &-2-2 {transform: translate(-3px, 17px) rotate(-1deg) !important; fill: $baseColor}
      &-2-3 {transform: translate(3px, 22px) rotate(.5deg) !important; fill: $baseColor}
      &-2-4 {transform: translate(-2px, 58px) rotate(-1deg) !important;}
      &-2-5 {transform: translate(2px, 72px) rotate(1deg) !important;}

      &-3-1 {transform: translate(-2px, -2px) rotate(1deg) !important; fill: $baseColor}
      &-3-2 {transform: translate(-4px, -6px) rotate(-1deg) !important; fill: $baseColor}
      &-3-3 {transform: translate(-2px, -3px) rotate(4deg) !important; fill: $baseColor}
      &-3-4 {transform: translate(-7px, -3px) rotate(-1deg) !important; fill: $baseColor}
      &-3-5 {transform: translate(-6px, -3px) rotate(3deg) !important; fill: $baseColor}
      &-3-6 {transform: translate(-2px, -2px) rotate(-2deg) !important; fill: $baseColor}
      &-3-7 {transform: translate(-45px, -4px) rotate(-10deg) !important;}
      &-3-8 {transform: translate(-45px, -50px) rotate(5deg) !important;}
      &-3-9 {transform: translate(0px, -50px) rotate(-3deg) !important;}
    }
    &:hover .pic .svg-star {
      transform: translate(0px, 0px) rotate(0deg) !important;
    }

    .pic {
      width: 150px;
      height: 150px;

      .svg-rect-1-1, .svg-rect-1-2, .svg-rect-1-3, .svg-rect-1-4, .svg-rect-1-5, .svg-rect-1-6, .svg-rect-1-7, .svg-rect-1-8, .svg-rect-1-9, .svg-rect-1-10,
      .svg-rect-1-11, .svg-rect-1-12, .svg-rect-1-13, .svg-rect-1-14, .svg-rect-1-15, .svg-rect-1-16, .svg-rect-1-17, .svg-rect-1-18, .svg-rect-1-19, .svg-rect-1-20,
      .svg-rect-1-21, .svg-rect-1-22, .svg-rect-1-23, .svg-rect-1-24, .svg-rect-1-25, .svg-rect-1-26, .svg-rect-1-27, .svg-rect-1-28, .svg-rect-1-29, .svg-rect-1-30,

      .svg-rect-2-1, .svg-rect-2-2, .svg-rect-2-3, .svg-rect-2-4, .svg-rect-2-5,

      .svg-rect-3-1, .svg-rect-3-2, .svg-rect-3-3, .svg-rect-3-4, .svg-rect-3-5, .svg-rect-3-6, .svg-rect-3-7, .svg-rect-3-8, .svg-rect-3-9 {
        transition: .5s;
        transition-timing-function: cubic-bezier(.62, 1.54, .47, .97);
        transform-origin: bottom;
        stroke: $baseColor;
        fill: #fff;
      }

    }
    .name {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      margin: 0;
      pointer-events: none;
    }
  }
}

</style>
