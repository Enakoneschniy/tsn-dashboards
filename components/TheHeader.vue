<template>
  <header>
    Header
    <nuxt-link :to="{ name: 'home' }" no-prefetch class="test">
      Home
    </nuxt-link>
    <nuxt-link :to="{ name: 'about' }" no-prefetch>
      About
    </nuxt-link>
    <nuxt-link :to="{ name: 'users' }" no-prefetch>
      Users
    </nuxt-link>
    <nuxt-link :to="{ name: 'test' }" no-prefetch>
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
