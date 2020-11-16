export const state = () => ({
  loading: false,
})

export const mutations = {
  LOADING: s => (s.loading = true),
  LOADED: s => (s.loading = false),
  RESET: s => Object.assign(s, state()),
}

export const actions = {
  async registerAsync({ commit }, data) {
    commit('LOADING')
    try {
      await this.$api.post('/user/sign-up', data)
      await this.$auth.loginWith('local', {
        data,
      })
    } catch (e) {
      //
    } finally {
      commit('LOADED')
    }
  },

  reset({ commit }) {
    commit('RESET')
  },
}
