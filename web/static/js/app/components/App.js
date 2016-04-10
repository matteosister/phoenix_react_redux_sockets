import React from 'react'
import ProductsList from './ProductsList'
import Header from './Header'
import { Container, Row } from './Grid'

const App = () => (
  <Container>
    <Row>
      <Header text="Shopping list" subtext="the ultimate real-time grocery store tool" />
    </Row>
    <ProductsList />
  </Container>
)

export default App
