<template>
  <div class="container">
    <div>
      <h1 class="title">{{ loggedInUser.name }}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>
