<script setup lang="ts">
const { loggedIn, clear } = useUserSession()

async function onClick() {
  await clear()
  await navigateTo('/login')
}
</script>

<template>
  <button v-if="loggedIn" @click="onClick">
    Выход
  </button>
</template>