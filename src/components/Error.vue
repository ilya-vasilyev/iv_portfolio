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
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 40px auto;
  height: 400px;
  color: #ccc;
  * {
    margin: 1rem;
  }
}
</style>
