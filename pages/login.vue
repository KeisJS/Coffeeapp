<script setup lang="ts">
const { loggedIn } = useUserSession()

if (loggedIn.value) {
  navigateTo('/account')
}
</script>

<template>
  <NuxtLayout name="single-content">
    <AuthForm />
  </NuxtLayout>
</template>