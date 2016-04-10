import React from 'react'
import { Row, Col } from './Grid'
import { increaseProductQuantity, decreaseProductQuantity } from './../actions'
import { connect } from 'react-redux'

const ProductView = ({id, name, qty, onMinusClick, onPlusClick}) => (
  <tr>
    <td>{name}</td>
    <td>
      {qty} <a href="#" onClick={() => onMinusClick(id)}><i className="fa fa-minus"></i></a> <a href="#"  onClick={() => onPlusClick(id)}><i className="fa fa-plus"></i></a>
    </td>
  </tr>
)

const mapDispatchToProps = (dispatch) => {
  return {
    onPlusClick: (id) => {
      dispatch(increaseProductQuantity(id))
    },
    onMinusClick: (id) => {
      dispatch(decreaseProductQuantity(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductView)
