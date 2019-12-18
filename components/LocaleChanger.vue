<template>
  <ul>
    <li v-for="lang of locales">
      <button @click.prevent="changeLocale(lang)">
        {{ lang }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LocaleChanger',
  computed: mapGetters({
    locales: 'localization/locales'
  }),
  methods: {
    changeLocale (lang) {
      let path = this.$nuxt.$route.path.replace(`/${lang}`, '')
      this.locales.forEach((locale) => {
        path = path.replace(`/${locale}`, '')
      })
      this.$router.replace(`/${lang}${path}`)
    }
  }
}
</script>

<style scoped>

</style>
