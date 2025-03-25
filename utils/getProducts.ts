import type { ProductFilter, ProductModel } from '~/models/product.model'

const random = (max: number) => Math.floor(Math.random() * max)

const getFilters: () => ProductFilter[][] = () => ([
  [{ id: 1, title: 'Простой садовый гномик'}, { id: 7, title: 'Боевой садовый гномик'}],
  [{ id: 2, title: 'Большой'}, { id: 3, title: 'Маленький'}, { id: 4, title: 'Средний'}],
  [{ id: 5, title: 'Пузатый'}, { id: 6, title: 'Стройный'}]
])

const getProducts = (count: number) => {
  const products: ProductModel[] = []

  for (let id = 1; id <= count; id++) {
    const dateCreated = new Date()
    dateCreated.setDate(random(dateCreated.getDay()))

    const currentProduct: ProductModel = {
      id,
      dateCreated: dateCreated.toLocaleDateString(),
      status: random(2) ? 'active' : 'disable',
      title: `Model ${id}`,
      filterIds: []
    }

    for (let currentFilters of getFilters()) {
      const filterId = random(currentFilters.length)

      currentProduct.filterIds.push(currentFilters[filterId].id)
    }

    products.push(currentProduct)
  }

  return products
}

export {
  getProducts,
  getFilters
}