import React, { useState, useEffect, useContext } from 'react'

import SearchContext from 'utils/SearchContext'
import ProductContext from 'utils/ProductContext'

import Result from './results/Result'

export default function Results() {
  const { search } = useContext(SearchContext)
  const { products } = useContext(ProductContext)
  const [filteredProducts, setFilteredProducts] = useState([])

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
      {filteredProducts.map((product, index) => (
        <Result key={product.label.fr} index={index} product={product} />
      ))}
    </div>
  )
}
