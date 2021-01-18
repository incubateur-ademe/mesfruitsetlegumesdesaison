import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import ProductContext from 'utils/ProductContext'

import Suggestion from './suggestions/Suggestion'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -0.5em;
`
export default function Suggestions(props) {
  const { suggestions } = useContext(ProductContext)
  const [shuffledSuggestions, setShuffledSuggestions] = useState([])
  useEffect(() => {
    let tempSuggestions = suggestions
    for (var i = tempSuggestions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = tempSuggestions[i]
      tempSuggestions[i] = tempSuggestions[j]
      tempSuggestions[j] = temp
    }
    setShuffledSuggestions(tempSuggestions)
  }, [suggestions])
  return (
    <Wrapper>
      {shuffledSuggestions
        .filter((suggestion, index) => index < props.length)
        .map((suggestion, index) => (
          <Suggestion
            key={suggestion.label.fr}
            suggestion={suggestion}
            index={index}
          />
        ))}
    </Wrapper>
  )
}
