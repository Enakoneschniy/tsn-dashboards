<template>
  <li>
    <div v-if="!isEdit">
      <strong>Name:</strong> {{ user.name }}
    </div>
    <div v-else>
      <strong>Name:</strong> <input v-model="localUser.name" type="text">
    </div>
    <div v-if="!isEdit">
      <strong>Email:</strong> {{ user.email }}
    </div>
    <div v-else>
      <strong>Email:</strong> <input v-model="localUser.email" type="text">
    </div>
    <div>
      <button v-if="!isEdit" @click.prevent.stop="onEdit">
        Edit
      </button>
      <button v-else @click.prevent.stop="onSave">
        Save
      </button>
      <button v-if="isEdit" @click.prevent.stop="onCancel">
        Cancel
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    user: {
      type: Object,
      required: true
      /* default () { // if required: false
        return {
          name: 'dd'
        }
      } */
    }
  },
  data () {
    return {
      localUser: {
        name: '',
        email: ''
      },
      isEdit: false
    }
  },
  created () {
    this.localUser = { ...this.user }
    // this.localUser = Object.assign({}, this.user)
  },
  methods: {
    onEdit (e) {
      this.isEdit = true
    },
    onSave () {
      console.log(this.localUser)
      this.isEdit = false
      this.$emit('save', this.localUser)
    },
    onCancel () {
      this.localUser = { ...this.user }
      this.isEdit = false
    }
  }
}
</script>

<style scoped>

</style>
