<template>
  <header>
    Header
    <nuxt-link :to="{ name: 'home' }" class="test">
      Home
    </nuxt-link>
    <nuxt-link :to="{ name: 'about' }">
      About
    </nuxt-link>
    <nuxt-link :to="{ name: 'users' }">
      Users
    </nuxt-link>
    <nuxt-link :to="{ name: 'test' }">
      Test
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>

</style>
