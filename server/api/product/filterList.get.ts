import { getFilters } from '~/utils/getProducts'

export default defineEventHandler(() => {

  return getFilters().flat()
})