<template>
  <div :class="$style.wrapper">
    <BasePageTitle>Register</BasePageTitle>
    <form @submit.prevent="onSubmit">
      <BaseInput
        v-model="email"
        placeholder="Email"
        :validation="$v.email"
        :class="$style.frmItm"
      />
      <BaseInput
        v-model="name"
        placeholder="Name"
        :validation="$v.name"
        :class="$style.frmItm"
      />
      <BaseInput
        v-model="age"
        placeholder="Age"
        :validation="$v.age"
        :class="$style.frmItm"
      />
      <BaseInput
        v-model="password"
        type="password"
        placeholder="Password"
        :validation="$v.password"
        :class="$style.frmItm"
      />
      <BaseInput
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm password"
        :validation="$v.confirmPassword"
        :class="$style.frmItm"
      />
      <BaseButton block>Submit</BaseButton>
    </form>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from 'vuelidate/lib/validators'
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      name: '',
      age: '',
      password: '',
      confirmPassword: '',
    }
  },
  validations: {
    email: { required, email },
    name: { required, minLength: minLength(4), maxLength: maxLength(20) },
    age: { required },
    password: { required, minLength: minLength(8) },
    confirmPassword: { notMatch: sameAs('password') },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  form {
    max-width: $screen-sm;
    margin: 0 auto;

    .frmItm {
      margin-bottom: $spacing;
    }
  }
}
</style>
