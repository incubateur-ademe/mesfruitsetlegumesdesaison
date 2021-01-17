import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { mq } from 'utils/styles'
import { currentMonth } from 'utils/months'
import SearchContext from 'utils/SearchContext'
import ProductContext from 'utils/ProductContext'

import Result from './results/Result'
import Suggestions from './results/Suggestions'

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  font-size: 1.2rem;
  text-align: center;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1000ms 2000ms;

  ${mq.small} {
    font-size: 1rem;
  }
`
export default function Results() {
  const { search } = useContext(SearchContext)
  const { products } = useContext(ProductContext)
  const [filteredProducts, setFilteredProducts] = useState([])

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => setMounted(true), 300)
  }, [])

  useEffect(() => {
    if (search.length > 2) {
      // Separate and normalize each word of the search
      const sentence = search
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .split(' ')

      setFilteredProducts(
        products.filter((product) => {
          // Normalize the product label
          const label = product.label.fr
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()

          // Filter the search array with the label.
          // Return true if each word in the search are found in the label
          return !sentence.filter((word) => !label.includes(word)).length
        })
      )
    } else {
      setFilteredProducts([])
    }
  }, [search, products])

  return (
    <div>
      {filteredProducts.length ? (
        filteredProducts.map((product, index) => (
          <Result key={product.label.fr} index={index} product={product} />
        ))
      ) : (
        <Suggestions />
      )}
      <StyledLink to={`/months/${currentMonth}`} mounted={mounted}>
        Voir tous les produits du mois
      </StyledLink>
    </div>
  )
}
