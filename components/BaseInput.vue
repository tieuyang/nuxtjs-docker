<template>
  <div :class="$style.wrapper">
    <input
      v-model="internalValue"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      @blur="$emit('blur')"
    />
    <BaseValidation :name="placeholder" :data="validation" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    validation: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  input {
    width: 100%;
    color: $font-color;
    padding: $spacing;
    border-radius: $border-radius;
    box-shadow: 0 0 0 1px rgba(26, 26, 26, 0.8);
    -moz-box-shadow: 0 0 0 1px rgba(26, 26, 26, 0.8);
    -webkit-box-shadow: 0 0 0 1px rgba(26, 26, 26, 0.8);
    -webkit-appearance: none;
    border: none;
    outline: none;
    font-family: $font-family;
    font-weight: 500;
    font-size: 14px;
    transition: box-shadow 0.4s;

    &::placeholder {
      color: $muted-color;
      font-weight: 500;
    }
    &:focus {
      box-shadow: 0 0 0 1px $primary-color;
      -moz-box-shadow: 0 0 0 1px $primary-color;
      -webkit-box-shadow: 0 0 0 1px $primary-color;
    }

    &:disabled {
      color: $font-color;
      cursor: not-allowed;
      background: lighten($grey-color, 0.2);
    }
  }
}
</style>
