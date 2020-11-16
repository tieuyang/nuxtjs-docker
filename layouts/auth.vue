<template>
  <div :class="$style.wrapper">
    <Nuxt />
  </div>
</template>

<style lang="scss" module>
.wrapper {
  @include wrapper;
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
