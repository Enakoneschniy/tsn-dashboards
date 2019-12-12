<template>
  <div>
    <h1>
      User page
    </h1>
    <p>
      <strong>Name:</strong> {{ user.name }}
    </p>
    <p>
      <strong>Email:</strong> {{ user.email }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'User',
  async asyncData ({ $axios, params }) {
    let user = {}
    try {
      user = await $axios.$get(`/users/${params.id}`, {
        params: {
          _embed: 'posts'
        }
      })
      console.log(user)
    } catch (e) {
      console.log(e.response)
    }
    return { user }
  }
}
</script>

<style scoped>

</style>
