import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

import { months } from 'utils/months'
import ProductContext from 'utils/ProductContext'

import Product from './months/Product'

const Wrapper = styled.div``
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`
const Title = styled.h2`
  margin: 0;
  font-size: 1.7em;
  text-align: center;

  ${(props) => props.theme.mq.small} {
    font-size: 1.1em;
  }
`
const Navigation = styled(Link)`
  font-size: 2em;
  font-weight: 900;
  text-decoration: none;
`
const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;

  ${(props) => props.theme.mq.small} {
    margin: 0 -1.5vw;
  }
`
export default function Listing() {
  const { month } = useParams()

  const { products } = useContext(ProductContext)

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setFilteredProducts(
      products
        .filter((product) => product.months.includes(Number(month)))
        .sort((a, b) => (a.local > b.local ? -1 : 1))
    )
  }, [products, month])

  return (
    <Wrapper>
      <Header>
        <Navigation to={`/months/${month > 0 ? Number(month) - 1 : 11}`}>
          ❮
        </Navigation>
        <Title>
          Tous les fruits et légumes{' '}
          {[3, 7, 9].includes(Number(month)) ? `d'` : 'de '}
          {months[month]}
        </Title>
        <Navigation to={`/months/${month < 11 ? Number(month) + 1 : 0}`}>
          ❯
        </Navigation>
      </Header>
      <Products>
        {filteredProducts.map((product) => (
          <Product key={product.label.fr} product={product} />
        ))}
      </Products>
    </Wrapper>
  )
}
