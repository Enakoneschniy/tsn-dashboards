<template>
  <div>
    <ul>
      <li v-for="user of users">
        <nuxt-link :to="{ name: 'user', params: { id: user.id, lang: 'ru' }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Users',
  computed: mapGetters({
    users: 'users/users'
  }),
  async fetch ({ store, error }) {
    try {
      if (store.getters['users/users'].length === 0) {
        await store.dispatch('users/loadUsers')
      }
    } catch (e) {
      error(e)
    }
  }
}
</script>

<style scoped>

</style>
