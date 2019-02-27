<template>
  <div class="component-error">
    <p>can't load component...</p>
    <h3>¯\_(ツ)_/¯</h3>
  </div>
</template>

<style lang="scss">
.component-loading,
.component-error  {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 40px auto;
  height: 400px;
  color: #444;
  * {
    margin: 1rem;
  }
}
</style>
