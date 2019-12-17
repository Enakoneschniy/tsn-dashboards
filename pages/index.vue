<template>
  <div class='container'>
    <div>
      <logo />
      <h1 class='title'>
        tsn-dashboards
      </h1>
      <h2 class='subtitle'>
        My best Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <button @click.prevent="onAuth">
      Login
    </button><button @click.prevent="onRegister">
      Register
    </button>
    <pre>
      {{ posts }}
    </pre>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  components: {
    Logo
  },
  auth: false,
  async asyncData ({ $axios }) {
    const posts = []
    try {
      posts.push(...await $axios.$get('/640/posts'))
      console.log(posts)
    } catch (e) {
      console.log(e.response.data)
    }
    return { posts }
  },
  methods: {
    async onAuth () {
      const user = {
        'email': 'olivier@mail.com',
        'password': 'bestPassw0rd'
      }
      await this.$auth.loginWith('local', {
        data: user
      })
    },
    async onRegister () {
      const user = {
        'email': 'olivier@mail.com',
        'password': 'bestPassw0rd',
        'first_name': 'Olivier',
        'last_name': 'Monge',
        'age': 32
      }
      try {
        const res = await this.$axios.$post('/register', user)
        // eslint-disable-next-line no-console
        console.log(res)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.response)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
