import React from 'react'

const Header = ({text, subtext}) => (
  <div className="page-header">
    <h1>{text} <small>{subtext}</small></h1>
  </div>
)

export default Header
