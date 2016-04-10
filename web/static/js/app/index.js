import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import shoppingListApp from './reducers'
import channel from "./channel"
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './components/App'
import React from 'react'
import { receivedProducts, receivedProduct } from './actions'

let store = createStore(shoppingListApp, applyMiddleware(thunk))

// listen to set_products event
channel.on("set_products", products => {
  store.dispatch(receivedProducts(products.data))
})
channel.on("product_updates", product => {
  store.dispatch(receivedProduct(product))
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react_redux_list')
)
