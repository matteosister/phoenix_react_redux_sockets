import React from 'react'
import { Row, Col } from './Grid'
import { increaseProductQuantity, decreaseProductQuantity } from './../actions'
import { connect } from 'react-redux'

const ProductView = ({id, name, qty, loading, onMinusClick, onPlusClick}) => (
  <tr>
    <td width="80%">{name}</td>
    <td className={loading ? "loading" : ""}>
      <div className="qty number">{qty}</div>
      <a href="#" onClick={() => onMinusClick(id)}><i className="fa fa-2x fa-minus"></i></a>
      &nbsp;
      <a href="#"  onClick={() => onPlusClick(id)}><i className="fa fa-2x fa-plus"></i></a>
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
