<template>
  <va-badge
    :text="status"
    :color="status"
  />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{params: {value: string}}>()

const status = computed(() => props.params.value)
</script>
