<template>
  <va-input
    v-model="filter"
    placeholder="Filter..."
  />
  <div style="height: 300px; width: 100%;">
    <ag-grid-vue
      class="ag-theme-vuestic"
      style="width: 100%; height: 100%;"
      :columnDefs="columnDefs"
      :rowData="users"
      :isExternalFilterPresent="() => true"
      :doesExternalFilterPass="doesExternalFilterPass"
      @grid-ready="onGridReady"
      :modules="modules"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { AgGridVue } from '@ag-grid-community/vue3'
import AgGridBadge from './AgGridBadge.vue'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import {users} from '../data/users'

const filter = ref('')
let gridApi: any = null

const onGridReady = (params: any) => {
  gridApi = params.api
}

watch(() => filter.value, () => {
  gridApi.onFilterChanged()
})

const modules = [ClientSideRowModelModule]

const columnDefs = [
  { field: 'name' },
  { field: 'email' },
  { field: 'country' },
  {
    field: 'status',
    cellRenderer: AgGridBadge,
  },
]

const doesExternalFilterPass = ({ data: user }: {user: typeof users[number]}) => {
  return JSON.stringify(user).includes(filter.value)
}
</script>

<style lang="scss">
@import "@vuestic/ag-grid-theme/index.scss";
</style>
