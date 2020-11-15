<template>
  <div>
    <input v-model="email" type="text" />
    <input v-model="password" type="text" />
    <button @click="login">Login</button>
    <button @click="test">Tset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
    async test() {
      await this.$api.get('task')
    },
  },
}
</script>
