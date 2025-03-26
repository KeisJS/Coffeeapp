import type { ProductFilter, ProductModel } from '~/models/product.model'
import useProductApi from '~/composables/api/useProductApi'
import useFiltersApi from '~/composables/api/useFiltersApi'

export default defineStore('products' , () => {
  const products = ref<ProductModel[]>([])
  const filters = ref<ProductFilter[]>([])
  const selectedDate = ref<string>('')
  const selectedFilters = reactive<number[]>([])

  const activeFilters = computed(() => {
    return filters.value
      .filter(
        filter => products.value.some(
          product => product.filterIds.includes(filter.id)
        )
      )
  })
  const selectedProducts = computed(() => {
    let resultProducts = products.value
    if (selectedFilters.length) {
      resultProducts = products.value.filter(product => {
        for (let filterId of product.filterIds) {
          if (selectedFilters.includes(filterId)) {
            return true
          }
        }
      })
    }

    if (selectedDate.value) {
      resultProducts = resultProducts.filter(product => product.dateCreated === selectedDate.value)
    }

    return resultProducts
  })

  const toggleFilter = (id: number) => {
    const indexId = selectedFilters.indexOf(id)
    if (indexId !== -1) {
      selectedFilters.splice(indexId, 1)
    } else {
      selectedFilters.push(id)
    }
  }

  const toggleDate = (date: string) => {
    if (selectedDate.value === date) {
      selectedDate.value = ''
    } else {
      selectedDate.value = date
    }
  }

  const fetchProducts = async () => {
    const { data: fetchProduct } = await useProductApi()

    products.value = fetchProduct.value!
  }

  const fetchFilters = async () => {
    const { data: fetchFilters } = await useFiltersApi()

    filters.value = fetchFilters.value!
  }

  return {
    products,
    filters,
    activeFilters,
    selectedDate,
    selectedFilters,
    selectedProducts,
    toggleFilter,
    toggleDate,
    fetchProducts,
    fetchFilters
  }
})