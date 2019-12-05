<template>
  <div>
    <h1>
      User page {{ params.id }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'User',
  asyncData ({ params }) {
    return { params }
  }
}
</script>

<style scoped>

</style>
