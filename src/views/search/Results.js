import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'

import { mq } from 'utils/styles'
import { currentMonth } from 'utils/months'
import SearchContext from 'utils/SearchContext'
import ProductContext from 'utils/ProductContext'

import Suggestions from 'components/misc/Suggestions'
import Result from './results/Result'
import NotFound from './results/NotFound'

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

  const [fuse, setFuse] = useState(null)
  useEffect(() => {
    setFuse(
      new Fuse(products, {
        keys: ['label.fr'],
        threshold: 0.3,
        minMatchCharLength: 3,
      })
    )
  }, [products])

  useEffect(() => {
    if (fuse) {
      setFilteredProducts(fuse.search(search))
    }
  }, [search, products, fuse])

  return (
    <div>
      {filteredProducts.length ? (
        filteredProducts.map((product, index) => (
          <Result
            key={product.item.label.fr}
            index={index}
            product={product.item}
          />
        ))
      ) : search.length > 2 ? (
        <NotFound />
      ) : (
        <Suggestions length={5} />
      )}
      <StyledLink to={`/months/${currentMonth}`} mounted={mounted}>
        Voir tous les produits du mois
      </StyledLink>
    </div>
  )
}
