<script setup lang="ts">
const { type = 'text', autocomplete = '' } = defineProps<{
  type?: 'password' | 'email' | 'text'
  autocomplete?: 'current-password' | 'username'
}>()
const value = defineModel()

</script>

<template>
  <input :type="type" class="form-control" v-model="value" :autocomplete="autocomplete" />
</template>