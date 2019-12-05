<template>
  <div>
    <ul>
      <li v-for="user of users" :key="user.id">
        <nuxt-link :to="{ name: 'user', params: { id: user.id, lang: 'ru' }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  async asyncData ({ $axios }) {
    let users = []
    try {
      users = await $axios.$get('https://next.json-generator.com/api/json/get/EynBvzGpv')
    } catch (e) {
      console.warn(e.response.data)
    }
    return { users }
  }
}
</script>

<style scoped>

</style>
