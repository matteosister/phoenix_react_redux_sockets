import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { getProducts } from './../reducers'
import { Row } from './Grid'


const ProductsListView = ({products}) => (
  <Row>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product =>
          <Product key={product.id} {...product}/>
        )}
      </tbody>
    </table>
  </Row>
)

const mapStateToProps = (state) => {
  return {
    products: getProducts(state)
  }
}

const ProductsList = connect(mapStateToProps)(ProductsListView)

export default ProductsList
