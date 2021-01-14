import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { mq } from 'utils/styles'
import ProductContext from 'utils/ProductContext'

import Product from './listing/Product'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;

  ${mq.small} {
    margin: 0 -1.5vw;
  }
`
export default function Listing() {
  const { month } = useParams()

  const { products } = useContext(ProductContext)

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.months.includes(Number(month)))
    )
  }, [products, month])

  return (
    <Wrapper>
      {filteredProducts.map((product) => (
        <Product product={product} />
      ))}
    </Wrapper>
  )
}
