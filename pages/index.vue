<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Yang IV</h1>
      <p class="subtitle">Gút chóp, ờ mây ging!</p>
      <nuxt-link class="links" :to="{ name: 'about' }">Click here!</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: pink;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #1f2123;
  word-spacing: 5px;
  padding-bottom: 15px;
  font-style: italic;
}

.links {
  padding-top: 15px;
  color: pink;
}
</style>
