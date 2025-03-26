<script setup lang="ts">

const store = useProductsStore()

const {
  toggleFilter,
  toggleDate,
  fetchProducts,
  fetchFilters,
} = store

const {
  activeFilters,
  selectedFilters,
  selectedProducts,
} = storeToRefs(store)

await fetchProducts()
await fetchFilters()
</script>

<template>
  <div class="row mt-2 mb-2">
    <div class="col">
      <span
          v-for="filter of activeFilters"
          @click="toggleFilter(filter.id)"
          :class="{
            'clickable': true,
            'ms-2': true,
            'me-2': true,
            'cursor-pointer': true,
            badge: true,
            'text-bg-primary': selectedFilters.includes(filter.id),
            'text-bg-secondary': !selectedFilters.includes(filter.id)}"
      >
        {{ filter.title }}
      </span>
    </div>
  </div>
  <div class="row">
    <div>
      <table class="table w-100">
        <thead>
        <tr>
          <th>Модель</th>
          <th>Дата создания</th>
          <th>Статус</th>
          <th>Характеристики</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in selectedProducts">
          <td>{{ product.title }}</td>
          <td @click="toggleDate(product.dateCreated)">
            <span class="clickable clickable__col">
              {{ product.dateCreated }}
            </span>
          </td>
          <td>{{ product.status }}</td>
          <td>
            <div v-for="filterId in product.filterIds">
              {{ activeFilters.find(filter => filter.id === filterId)!.title }}
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.clickable {
  cursor: pointer;
}

.clickable__col {
  border-bottom: 1px dotted var(--bs-dark);
}
</style>