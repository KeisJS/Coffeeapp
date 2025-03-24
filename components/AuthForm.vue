<script setup lang="ts">
import useUserLoginApi from '~/composables/api/useUserLoginApi'
import { useUserSession } from '#imports'

const data = reactive({
  email: '',
  password: ''
})

const { userLoginApi, error, data: user } = useUserLoginApi()
const { fetch: refreshSession } = useUserSession()

async function onSubmit() {
  if (data.email.trim() && data.password.trim()) {
    await userLoginApi(data)
  }
}

watchEffect(async () => {
  if (user.value) {
    await refreshSession()
    await navigateTo('/account')
  }
})

</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <input type="email" placeholder="Enter email" v-model="data.email">
    </div>
    <div>
      <input type="password" placeholder="Enter password" v-model="data.password">
    </div>
    <div>
      <button type="submit">Войти</button>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </form>
</template>