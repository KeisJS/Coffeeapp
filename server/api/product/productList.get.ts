import { getProducts } from '~/utils/getProducts'

export default defineEventHandler(() => {

  return getProducts(10)
})