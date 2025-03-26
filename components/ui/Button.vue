<script setup lang="ts">
defineEmits(['click'])
const { type = 'button' } =defineProps<{
  type?: 'button' | 'submit'
}>()
</script>

<template>
  <button @click="$emit('click')" :type="type" class="btn btn-primary">
    <slot />
  </button>
</template>