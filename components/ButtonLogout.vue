<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

const { loggedIn, clear } = useUserSession()

async function onClick() {
  await clear()
  await navigateTo('/login')
}
</script>

<template>
  <Button v-if="loggedIn" @click="onClick">
    Выход
  </Button>
  <NuxtLink v-else to="/login">Войдите</NuxtLink>
</template>