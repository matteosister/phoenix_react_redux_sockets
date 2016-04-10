import {RECEIVED_PRODUCTS, RECEIVED_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY} from "./actions"
const Immutable = require('immutable')
const _ = require('lodash')

const initialState = Immutable.Map({
  products: Immutable.List()
})

export function getProducts(state) {
  return state.get("products")
}

export default function shoppingListApp(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_PRODUCTS:
      return state.set('products', Immutable.List(action.payload.products))
    case RECEIVED_PRODUCT:
      let receivedProduct = action.payload.product
      let newProducts = _.map(state.get('products').toArray(), (storeProduct) => {
        return storeProduct.id === receivedProduct.id
          ? receivedProduct
          : storeProduct
      })
      return state.set('products', Immutable.List(newProducts))
    default:
      return state
  }
  return state
}
