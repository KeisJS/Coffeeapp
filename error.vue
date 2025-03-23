<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps({
  error: Object as () => NuxtError
})

if (error && error?.statusCode === 404) {
  navigateTo('/login')
}
</script>

<template>
  <NuxtLayout name="single-content">
    <h1>{{ error?.statusCode }}</h1>
    <div>
      {{ error }}
    </div>
  </NuxtLayout>
</template>