<template>
  <div>
    About
    <button @click="isEdit = !isEdit">Edit</button>
    <span v-if="!isEdit"> {{ name }}</span>
    <input v-else v-model="name" type="text">
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: 'Ivan',
      isEdit: false
    }
  }
}
</script>

<style scoped>

</style>
