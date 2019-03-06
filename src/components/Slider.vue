<template>
  <div class="slider">
    <div class="slider-content">
      <slot :curent="curent" />
    </div>
    <div class="slider-controls">
      <button
        class="arrow left"
        @click="curent = curent === 1 ? total : curent - 1"
      />
      <span>
        {{ curent }} of {{ total }}
      </span>
      <button
        class="arrow right"
        @click="curent = curent === total ? 1 : curent + 1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      curent: 1
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.slider {
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  .arrow {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: 50% 50% no-repeat;
    background-size: 40px 40px;
    margin: 0 5px;
    padding: 0;

    &.left {
      background-image: url('../assets/images/left.svg');
      background-size: 20px 20px;
    }

    &.right {
      background-image: url('../assets/images/right.svg');
      background-size: 20px 20px;
    }

    &[disabled] {
      opacity: 0.3;
      cursor: default;
    }
  }
}
</style>
