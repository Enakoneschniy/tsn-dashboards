<template>
  <div>
    <h1>About</h1>
    <img src="/image1.jpg">
    <img src="@/assets/image1.jpg">
    <p>{{ user1.name }}</p>
    <p>{{ user2.name }}</p>
    <div v-html="htmlSrc"></div>
    <div
      :class="className"
      :style="`background-image: url(${require('@/assets/image1.jpg')});`"></div>
    <hr>
    <UserList :users="users" @save="onSave" />
    <!--<div>
      <template v-for="user of users">
        <div>
          <strong>Name:</strong> {{ user.name }}
        </div>
        <div>
          <strong>Email:</strong> {{ user.email }}
        </div>
        <div>
          <button>Edit</button>
        </div>
      </template>
    </div>-->
  </div>
</template>

<script>
import UserList from '../components/UserList'

export default {
  name: 'About',
  components: { UserList },
  data () {
    return {
      className: 'test-img',
      htmlSrc: '<p>Test</p>',
      users: [
        {
          id: 1,
          name: 'Ivan',
          email: 'ivan@gmail.com'
        },
        {
          id: 2,
          name: 'Petya',
          email: 'petya@gmail.com'
        },
        {
          id: 3,
          name: 'Nick',
          email: 'nick@gmail.com'
        }
      ],
      user1: {
        name: 'Ivan',
        isEdit: false
      },
      user2: {
        name: 'Petya',
        isEdit: false
      }
    }
  },
  methods: {
    onSave (user) {
      const index = this.users.findIndex(item => item.id === user.id)
      this.users.splice(index, 1, user)
    }
  }
}
</script>

<style scoped>
.test-img {
  width: 741px;
  height: 318px;
}
</style>
