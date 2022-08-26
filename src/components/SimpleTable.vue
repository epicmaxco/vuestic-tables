<template>
  <va-input
    v-model="filter"
    placeholder="Filter..."
  />
  <table class="va-table" style="width: 100%">
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Country</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in usersFiltered" :key="user.id">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.country }}</td>
      <td>
        <va-badge
          :text="user.status"
          :color="user.status"
        />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const filter = ref('')

import { users } from '../data/users'

const usersFiltered = computed(() => users.filter(user => JSON.stringify(user).includes(filter.value)))
</script>

<style lang="scss" scoped>

</style>
