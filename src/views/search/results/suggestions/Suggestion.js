import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  font-size: 2.6em;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transform: translateY(${(props) => (props.mounted ? 0 : '200%')});
  transition: opacity 1000ms ${(props) => props.index * 100 + 400}ms,
    transform 400ms ${(props) => props.index * 100 + 300}ms ease-in-out,
    text-shadow 300ms ease-out, font-size 200ms ease-out;
  cursor: pointer;

  &:hover {
    font-size: 3.2em;
  }
`
export default function Suggestion(props) {
  const { setSearch } = useContext(SearchContext)

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <Wrapper
      key={props.suggestion.label.fr}
      index={props.index}
      mounted={mounted}
      onClick={() => setSearch(props.suggestion.label.fr)}
    >
      {props.suggestion.emoji}
    </Wrapper>
  )
}
