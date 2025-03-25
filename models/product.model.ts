interface ProductModel {
  id: number
  dateCreated: string
  status: 'active' | 'disable'
  filterIds: number[]
  title: string
}

interface ProductFilter {
  id: number
  title: string
}

export type {
  ProductModel,
  ProductFilter
}