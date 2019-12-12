<template>
  <div>
    <ul>
      <li v-for="user of users">
        <nuxt-link :to="{ name: 'user', params: { id: user.id, lang: 'ru' }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <validation-observer ref="addUserForm" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <validation-provider v-slot="{ errors, classes }" name="name" rules="required|min:3" tag="div">
          <label>
            <input v-model="userData.name" :class="classes" type="text" placeholder="User Name">
          </label>
          <p v-for="error of errors">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider v-slot="{ errors, classes }" name="email" rules="required|email" tag="div">
          <label>
            <input v-model="userData.email" :class="classes" type="text" placeholder="Email">
          </label>
          <p v-for="error of errors">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <button type="submit">
          Create
        </button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Users',
  data () {
    return {
      userData: {
        email: '',
        name: ''
      }
    }
  },
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
  },
  methods: {
    ...mapActions({
      addNewUser: 'users/addNewUser'
    }),
    async onSubmit () {
      try {
        if (await this.$refs.addUserForm.validate()) {
          this.addNewUser(this.userData)
        }
      } catch (e) {
        console.log(e.response)
      }
    }
  }
}
</script>

<style scoped>

</style>
