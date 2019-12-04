<template>
  <ul>
    <UserListItem @save="onSave" :user="user" v-for="user of users" />
  </ul>
</template>

<script>
import UserListItem from './UserListItem'
export default {
  name: 'UserList',
  components: { UserListItem },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSave (user) {
      this.$emit('save', user)
    }
  }
}
</script>

<style scoped>

</style>
