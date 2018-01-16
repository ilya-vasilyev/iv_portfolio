<template lang='pug'>
  div#app
    header
      nav
        section(@click="$router.push('/')").left
          p.ava
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510")
              path(shape-rendering="geometricPrecision" d="M251.4 8C117.3 8 8.6 116.4 8.6 250 8.6 383.7 117.3 492.1 251.4 492.1 385.6 492.1 494.3 383.7 494.3 250 494.3 116.4 385.6 8 251.4 8Zm-59.8 83.2c7.8 0 13.8 2.2 18.1 6.6 4.4 4.3 6.6 9.7 6.6 16.3 0 6.6-2.2 12.1-6.6 16.5-4.3 4.3-10.3 6.4-18.1 6.4-7.7 0-13.7-2.1-17.9-6.4-4.3-4.4-6.4-9.9-6.4-16.5 0-6.6 2.1-12.1 6.4-16.3 4.3-4.4 10.2-6.6 17.9-6.6zm-80.4 72.6 102.4 0 0 156.8 57 0 0 35.1-159.3 0 0-35.1 59.6 0 0-121.5-59.6 0zm131.1 0 43.8 0 47.4 138.4 3 14.2 3.2-14 46.5-138.6 43.8 0-75.2 192-36.5 0z")
          p.name ilya vasilyev
        section.right
          div(v-for="(item, index) in menu" :class="{selected: item.path == $route.fullPath}")
            span |
            router-link(:to='item.path') {{item.name}}
      h1
        span(@click='rndTitle')#typed
        span.animate-flicker |
    div.workarea
      router-view(name='a')
      router-view(name='b')
      router-view(name='c')
      router-view(name='y')
      router-view(name='z')
</template>

<script>

import Typed from 'typed.js';

export default {
  name: 'app',
  data () {
    return {
      menu: [
        {name: 'home', path: '/'},
        {name: 'skills', path: '/skills'},
        {name: 'experience', path: '/experience'},
        {name: 'portfolio', path: '/portfolio'},
        {name: 'contact', path: '/contact'},
      ],
      titles: [
        'hello',
        'welcome',
        'yo',
        'sup',
        'wazzup',
        'hey ya',
        'howdy',
        'haaaiii',
        'oi',
      ],
    }
  },
  created: function() {
    window.scrollTo(0, 0);
  },
  mounted: function() {
    this.rndTitle()
  },
  methods: {
    rndTitle: function () {
      const titles = this.titles
      const currentTitle = document.querySelector('#typed').textContent

      function rnd() {
        const n = Math.floor(Math.random()*(titles.length))
        return titles[n] == currentTitle ? rnd() : n // recursive, to avoid the same title
      }

      const nnew = titles[rnd()]
      const typed = new Typed('#typed', {
        strings: [currentTitle, nnew],
        startDelay: 0,
        backDelay: 150,
        typeSpeed: 40,
        backSpeed: 40,
        showCursor: false
      })
    }
  },
}
</script>

<style lang='scss'>

@font-face {
  font-family: Roboto;
  font-weight: 300;
  src: url('./assets/fonts/Roboto-Light.ttf');
}
@font-face {
  font-family: Roboto;
  font-weight: 800;
  src: url('./assets/fonts/Roboto-Bold.ttf');
}
@font-face {
  font-family: Roboto Mono;
  font-weight: 300;
  src: url('./assets/fonts/RobotoMono-Light.ttf');
}
@font-face {
  font-family: Roboto Mono;
  font-weight: 800;
  src: url('./assets/fonts/RobotoMono-Bold.ttf');
}
@font-face {
  font-family: Roboto Slab;
  font-weight: 300;
  src: url('./assets/fonts/RobotoSlab-Light.ttf');
}

@import "./assets/_common.scss";

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
}

// GENERAL CSS
body {
  margin: 0;
}
.workarea {
  padding: 0 .5rem;
  max-width: 700px;
  margin: 0 auto;
}
h1 {font-weight: 800}
h2 {font-weight: 300}
h3 {font-weight: 800}
p {
  line-height: 1.8;
}
a {
  color: $baseColor;
  &:active {opacity: .75}
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  &:focus {text-decoration: underline}
}
i {
  display: block;
  margin: 1rem auto;
  width: 90%;
  max-width: 500px;
  color: $grey;
  &:before {
    content: "i";
    display: inline-block;
    margin: 0 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    font: 1rem Roboto Mono;
    line-height: 1.5;
    font-weight: 800;
    border: 1px solid $grey;
    border-radius: 1.2rem;
  }
}
button, input[type="submit"] {
  font: 1rem Roboto, Helvetica, Arial, sans-serif;
  font-weight: 800;
  padding: 0.5rem 1rem;
  margin: .5rem .25rem;
  background: $baseColor;
  color: #fff;
  outline: none;
  border: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  cursor: pointer;
  &:active {opacity: .75}
  &:focus {text-decoration: underline}
  &.white {
    background-color: #fff;
    color: $baseColor;
    // border: 1px solid $baseColor;
  }
  &[disabled] {
    opacity: .5;
    cursor: default;
  }
}
.likeButton {
  display: inline-block;
  @extend button;
}
input[type="text"],input[type="email"], textarea {
  font: .8rem Roboto Mono;
  width: 90%;
  padding: .5rem 5px;
  margin:  .5rem auto;
  outline: none;
  border: none;
  border-left: 5px solid #fff;
  background: $lightColor;
  box-shadow: inset 1px 2px 7px rgba(70, 70, 70, 0.3);
  transition: border-color .5s;
  &:focus {border-left: 5px solid $baseColor}
}
textarea {
  min-height: 10rem;
  max-height: 20rem;
}
label {
  text-align: left;
}
input[type="submit"] {
  @extend button;
}
::selection {
  background: $transColor;
  color: #fff;
}
::-moz-selection {
  background: $transColor;
  color: #fff;
}
sup, small {
  margin: 0 .25rem;
  color: $grey;
}
code {
  font: 0.8rem Roboto Mono;
  background: #eee;
  color: $baseColor;
  padding: 0 0.25rem;
}
pre {
  font: 0.8rem Roboto Mono;
  text-align: left;
  overflow: auto;
  .method {
    user-select: none;
    background: #fff;
    padding: 0 0.25rem;
    color: $baseColor;
    font-weight: 800;
  }
}
hr {
  border: none;
  height: 1px;
  background: $lightGrey;
  // border-top: 1px solid $lightColor;
}



header {
  background: $baseColor;
  color: #fff;
  ::selection {
    background: $lightColor;
    color: #fff;
  }
  ::-moz-selection {
    background: $lightColor;
    color: #fff;
  }
}

nav {
  @include flex(row, space-between, center,nowrap);

  .left {
    @include flex(row, flex-start, center,nowrap);
    padding: .25rem;
    text-align: left;
    cursor: pointer;

    &:hover .name, &:active .name {opacity: 1}
    &:hover .ava, &:active .ava {fill: #fff;}

    .ava {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      min-height: 2rem;
      margin: .5rem;
      fill: $lightColor;
    }
    .name {
      opacity: 0;
      transition: opacity .1s;
      line-height: 1;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  .right {
    @include flex(row, flex-end, center,wrap);
    padding: .25rem .5rem;

    div {
      display: inline-block;
      &:first-child span {display: none;}
    }
    a {
      padding: .25rem;
    	line-height: 2;
      color: #fff;
      user-select: none;
    }
    span {
      padding: 0 .25rem;
      opacity: .5;
    	font-size: 1.3rem;
      font-weight: 300;
      user-select: none;
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
    .selected {
      font-weight: 800;
      a {
        text-decoration: none;
      }
    }
  }

}
h1 {
  margin: 0 auto;
  padding: 3rem 0;
  span {
    cursor: pointer;
    &:hover {text-decoration: underline}
  }
}
h2 {
  font-family: Roboto Slab;
  font-size: 2rem;
}
.typed {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
@keyframes flickerAnimation {
  0%   { opacity:1; }
  49%  { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:0; }
}
.animate-flicker {
    user-select: none;
    animation: flickerAnimation 1.5s infinite;
}

.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    font-family: Roboto;
    font-size: .8rem;
    background: black;
    color: white;
    border-radius: 16px;
    padding: 10px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
