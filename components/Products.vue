<script setup lang="ts">
import useProductApi from '~/composables/api/useProductApi'
import useFiltersApi from '~/composables/api/useFiltersApi'


const { data: products } = await useProductApi()
const { data: filters } = await useFiltersApi()
const activeFilters = computed(() => {
  return filters.value!.flat()
      .filter(
          filter => products.value!.some(
              product => product.filterIds.includes(filter.id)
          )
      )
})

const selectedDate = ref('')

const selectedFilters = reactive<number[]>([])
const selectedProducts = computed(() => {
  let resultProducts = products.value
  if (selectedFilters.length) {
    resultProducts = products.value!.filter(product => {
      for (let filterId of product.filterIds) {
        if (selectedFilters.includes(filterId)) {
          return true
        }
      }
    })
  }

  if (selectedDate.value) {
    resultProducts = resultProducts!.filter(product => product.dateCreated === selectedDate.value)
  }

  return resultProducts
})

function onSelectFilter(id: number) {
  const indexId = selectedFilters.indexOf(id)
  if (indexId !== -1) {
    selectedFilters.splice(indexId, 1)
  } else {
    selectedFilters.push(id)
  }
}

function onSelectDate(date: string) {
  if (selectedDate.value === date) {
    selectedDate.value = ''
  } else {
    selectedDate.value = date
  }
}
</script>

<template>
  <table>
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
      <td @click="onSelectDate(product.dateCreated)">{{ product.dateCreated }}</td>
      <td>{{ product.status }}</td>
      <td>
        <div v-for="filterId in product.filterIds">
          {{ activeFilters.find(filter => filter.id === filterId)!.title }}
        </div>
      </td>
    </tr>
    </tbody>
  </table>
  <div>
    <span v-for="filter of activeFilters" @click="onSelectFilter(filter.id)">
      <b v-if="selectedFilters.includes(filter.id)">
        {{ filter.title }}
      </b>
      <span v-else>{{ filter.title }}</span>
    </span>
  </div>
</template>