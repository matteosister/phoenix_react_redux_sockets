import React from 'react'
// import _ from 'lodash'

export const Container = (props) => <div className="container">{props.children}</div>
export const ContainerFluid = (props) => <div className="container-fluid">{props.children}</div>
export const Row = (props) => <div className="row">{props.children}</div>
export const Col = (props) => {
  let className = `col-md-${props.size}`
  return (
    <div className={className}>{props.children}</div>
  )
}
