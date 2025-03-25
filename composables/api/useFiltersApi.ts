import { useAPI } from '~/composables/useApi'
import type { ProductFilter } from '~/models/product.model'

const useProductApi = () => {
  return useAPI<ProductFilter[][]>('/product/filterList')
}

export default useProductApi