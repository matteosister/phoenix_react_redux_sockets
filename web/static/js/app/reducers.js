import {RECEIVED_PRODUCTS, RECEIVED_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY} from "./actions"
const Immutable = require('immutable')
const _ = require('lodash')

const initialState = Immutable.Map({
  products: Immutable.List()
})

export function getProducts(state) {
  return state.get("products")
}

function addLoadingTo(products, id) {
  return Immutable.List(_.map(products, (storeProduct) => {
    if (storeProduct.id === id) {
      storeProduct.loading = true
    } else {
      storeProduct.loading = false
    }
    return storeProduct
  }))
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
    case INCREASE_PRODUCT_QUANTITY:
      return state.set('products', addLoadingTo(state.get('products').toArray(), action.payload))
    case DECREASE_PRODUCT_QUANTITY:
      return state.set('products', addLoadingTo(state.get('products').toArray(), action.payload))
    default:
      return state
  }
  return state
}
