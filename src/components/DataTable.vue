<template>
  <va-input
    v-model="filter"
    placeholder="Filter..."
  />
  <va-data-table
    :items="users"
    :columns="columns"
    :filter="filter"
  >
    <template #cell(status)="{ value }">
      <va-badge
        :text="value"
        :color="value"
      />
    </template>
  </va-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { users } from '../data/users'

const filter = ref('')

const columns = [
  { key: 'name' },
  { key: 'email' },
  { key: 'country' },
  { key: 'status' },
]
</script>
