export const state = () => ({
  users: []
})

export const actions = {
  async nuxtServerInit () {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
  },
  async loadUsers ({ commit }) {
    try {
      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      commit('setUsers', users)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}

export const getters = {
  users (state) {
    return state.users
  }
}
export const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}
