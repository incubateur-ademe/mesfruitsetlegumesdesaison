import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Fuse from '../../node_modules/fuse.js/dist/fuse.basic.esm.min.js'

import { currentMonth } from 'utils/months'
import SearchContext from 'utils/SearchContext'
import ProductContext from 'utils/ProductContext'
import useMounted from 'hooks/useMounted'

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

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
export default function Results(props) {
  const { search } = useContext(SearchContext)
  const { products } = useContext(ProductContext)
  const [filteredProducts, setFilteredProducts] = useState([])

  const mounted = useMounted()

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
    <>
      {filteredProducts.length ? (
        filteredProducts.map(
          (product, index) =>
            (!props.iframe || index === 0) && (
              <Result
                key={product.item.label.fr}
                index={index}
                product={product.item}
              />
            )
        )
      ) : search.length > 2 ? (
        <NotFound />
      ) : (
        <Suggestions length={5} iframe={props.iframe} />
      )}
      {!props.iframe && (
        <StyledLink to={`/months/${currentMonth}`} mounted={mounted ? 1 : 0}>
          Voir tous les produits du mois
        </StyledLink>
      )}
    </>
  )
}
