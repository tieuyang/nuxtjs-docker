export default function ({ $axios, env, store }, inject) {
  const api = $axios
  api.interceptors.request.use(config => {
    const token = ''
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })
  inject('api', api)
}
