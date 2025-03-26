<script setup lang="ts">
const { loggedIn } = useUserSession()

if (loggedIn.value) {
  navigateTo('/account')
}
</script>

<template>
  <NuxtLayout name="single-content">
    <div class="min-vh-100 row align-items-center">
      <div class="col">
        <AuthForm />
      </div>
    </div>
  </NuxtLayout>
</template>