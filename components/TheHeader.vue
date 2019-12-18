<template>
  <header>
    Header
    <nuxt-link :to="{ name: 'home', params: { lang } }" no-prefetch class="test">
      Home
    </nuxt-link>
    <nuxt-link :to="{ name: 'about', params: { lang } }" no-prefetch>
      About
    </nuxt-link>
    <nuxt-link :to="{ name: 'users', params: { lang } }" no-prefetch>
      Users
    </nuxt-link>
    <nuxt-link :to="{ name: 'test', params: { lang } }" no-prefetch>
      Test
    </nuxt-link>
    <LocaleChanger />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleChanger from './LocaleChanger'
export default {
  name: 'TheHeader',
  components: { LocaleChanger },
  computed: mapGetters({
    lang: 'localization/locale'
  })
}
</script>

<style scoped>

</style>
