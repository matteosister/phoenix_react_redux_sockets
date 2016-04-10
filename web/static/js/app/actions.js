import channel from "./channel"

export const RECEIVED_PRODUCTS = "received_products"
export const RECEIVED_PRODUCT = "received_product"
export const INCREASE_PRODUCT_QUANTITY = "inc_product_qty"
export const DECREASE_PRODUCT_QUANTITY = "dec_product_qty"

export function receivedProducts(products) {
  return {
    type: RECEIVED_PRODUCTS,
    payload: { products }
  }
}

export function receivedProduct(product) {
  return {
    type: RECEIVED_PRODUCT,
    payload: { product }
  }
}

const sendToChannel = (action, payload) => {
  channel.push(action, payload)
}

export function increaseProductQuantity(id) {
  return (dispatch) => {
    sendToChannel(INCREASE_PRODUCT_QUANTITY, {product_id: id})
    dispatch({
      type: INCREASE_PRODUCT_QUANTITY,
      payload: id
    })
  }
}

export function decreaseProductQuantity(id) {
  return (dispatch) => {
    sendToChannel(DECREASE_PRODUCT_QUANTITY, {product_id: id})
    dispatch({
      type: DECREASE_PRODUCT_QUANTITY,
      payload: id
    })
  }
}
