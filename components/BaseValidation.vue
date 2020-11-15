<template>
  <div :class="$style.container">
    <div v-if="isDisplayedErrorMessage('vrEmail')">
      <slot name="error-msg-email">Email không đúng định dạng</slot>
    </div>
    <div v-if="isDisplayedErrorMessage('vrPhone')">
      <slot name="error-msg-vr-phone">Số điện thoại không đúng định dạng</slot>
    </div>

    <div v-if="isDisplayedErrorMessage('required')">
      <slot name="error-msg-required">
        {{ `${name} không được để trống` }}
      </slot>
    </div>
    <div v-if="isDisplayedErrorMessage('notMatch')">
      <slot name="error-msg-not-match">Mật khẩu không khớp</slot>
    </div>

    <div v-if="isDisplayedErrorMessage('minLength')">
      <slot name="error-msg-minlength">
        {{ `${name} ít nhất ${data.$params.minLength.min} ký tự` }}
      </slot>
    </div>

    <div v-if="isDisplayedErrorMessage('maxLength')">
      <slot name="error-msg-maxlength">
        {{ `${name} nhiều nhất ${data.$params.maxLength.max} ký tự` }}
      </slot>
    </div>

    <div v-if="isDisplayedErrorMessage('numeric')">
      <slot name="error-msg-numeric">
        {{ `${name} phải là số` }}
      </slot>
    </div>

    <div v-if="isDisplayedErrorMessage('minValue')">
      <slot name="error-msg-minvalue">
        {{ `${name} có giá trị nhỏ nhất ${data.$params.minValue.min}` }}
      </slot>
    </div>

    <div v-if="isDisplayedErrorMessage('maxValue')">
      <slot name="error-msg-maxvalue">
        {{ `${name} có giá trị lớn nhất ${data.$params.maxValue.max}` }}
      </slot>
    </div>

    <div v-if="isDisplayedErrorMessage('vrAge')">
      <slot name="error-msg-maxlength">
        {{ $t('validationError.vrAge') }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => {} },
    name: { type: String, default: '' },
  },
  computed: {
    isShowFeedback() {
      if (!this.data) return false

      const { $error } = this.data

      return !!$error
    },
  },
  methods: {
    isDisplayedErrorMessage(validator) {
      return (
        Object.prototype.hasOwnProperty.call(this.data, validator) &&
        !this.data[validator] &&
        this.isShowFeedback
      )
    },
  },
}
</script>

<style lang="scss" module>
.container {
  @include fontError;
  margin: $spacing / 3 0 0 $spacing;
  text-transform: lowercase;
  &:first-letter {
    text-transform: capitalize;
  }
}
</style>
