export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: '/api',
  })

  return {
    provide: {
      api: api as typeof $fetch
    }
  }
})