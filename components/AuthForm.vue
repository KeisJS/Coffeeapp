<script setup lang="ts">
import useUserLoginApi from '~/composables/api/useUserLoginApi'
import { useUserSession } from '#imports'
import TextInput from '~/components/ui/TextInput.vue'
import Button from '~/components/ui/Button.vue'

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
    <div class="row justify-content-center mb-4">
      <div class="col col-sm-6 col-md-4">
        <TextInput type="email" v-model="data.email" autocomplete="username" />
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col col-sm-6 col-md-4">
        <TextInput type="password" v-model="data.password" autocomplete="current-password" />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-sm-6 col-md-3">
        <Button type="submit" class="form-control">
          Войти
        </Button>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <div v-show="error"  class="col col-sm-6 col-md-3 position-relative">
        <div class="form-control translate-middle-x bg-warning position-absolute top-0 start-50">
          {{ error }}
        </div>
      </div>
    </div>
  </form>
</template>