export const state = () => ({
  users: []
})

export const actions = {
  async loadUsers ({ commit }) {
    try {
      const users = await this.$axios.$get('/users')
      commit('setUsers', users)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  async addNewUser ({ commit }, user) {
    const newUser = await this.$axios.$post('/users', user)
    commit('setNewUser', newUser)
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
  },
  setNewUser (state, user) {
    state.users.push(user)
  }
}
