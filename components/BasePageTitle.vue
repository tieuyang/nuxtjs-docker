<template>
  <h3 :class="$style.title">
    <slot />
  </h3>
</template>

<style lang="scss" module>
.title {
  @include fontTitle;
  text-align: center;
  margin-bottom: $spacing * 4;
}
</style>
