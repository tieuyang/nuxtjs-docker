<template>
  <button :class="classes" v-bind="$props">
    <template v-if="loading">
      <v-icon :class="$style.loading" name="spinner" />
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean },
    block: Boolean,
    outline: Boolean,
    small: Boolean,
    extraSmall: Boolean,
    donate: Boolean,
    loading: Boolean,
  },
  computed: {
    classes() {
      return {
        [this.$style.button]: true,
        [this.$style.block]: !!this.block,
        [this.$style.outline]: !!this.outline,
        [this.$style.loading]: !!this.loading,
      }
    },
  },
}
</script>

<style lang="scss" module>
.button {
  width: auto;
  font-family: $font-family;
  font-weight: 600;
  font-size: 14px;
  padding: $spacing $spacing * 4;
  border-radius: $border-radius;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  color: $primary-color;
  border: 2px solid $dark-color;
  outline: none;
  box-sizing: border-box;
  transition-duration: 400ms;
  transition-timing-function: ease-in-out;
  transition-property: color, opacity, background-color, box-shadow,
    border-color;
  will-change: color, opacity, background-color, box-shadow, border-color;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: $primary-color;
    color: $dark-color;
    background-color: $primary-color;
  }

  &.block {
    display: flex;
    width: 100%;
    text-align: center;
    padding: $spacing 0;
  }

  .loading {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
    margin: 1px 0;
  }
}
</style>
