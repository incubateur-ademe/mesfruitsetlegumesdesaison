import React, { useContext } from 'react'
import styled from 'styled-components'

import ProductContext from 'utils/ProductContext'

import Suggestion from './suggestions/Suggestion'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -0.5em;
`
export default function Suggestions() {
  const { suggestions } = useContext(ProductContext)

  return (
    <Wrapper>
      {suggestions.map((suggestion, index) => (
        <Suggestion
          key={suggestion.label.fr}
          suggestion={suggestion}
          index={index}
        />
      ))}
    </Wrapper>
  )
}
