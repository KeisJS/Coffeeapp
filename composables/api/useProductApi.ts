import { useAPI } from '~/composables/useApi'
import type { ProductModel } from '~/models/product.model'

const useProductApi = () => {
  return useAPI<ProductModel[]>('/product/productList')
}

export default useProductApi