import React, { useState, useEffect } from 'react'
import ProductContext from 'utils/ProductContext'

export default function ProductProvider(props) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((res) =>
        setProducts(
          res.sort((a, b) =>
            a.label.fr.normalize('NFD') > b.label.fr.normalize('NFD') ? 1 : -1
          )
        )
      )
  }, [])

  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    fetch('/data/suggestions.json')
      .then((res) => res.json())
      .then((res) => setSuggestions(res))
  }, [])

  return (
    <ProductContext.Provider value={{ products, suggestions }}>
      {props.children}
    </ProductContext.Provider>
  )
}
