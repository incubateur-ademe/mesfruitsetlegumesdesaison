import React, { useState, useEffect, useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import SearchContext from 'utils/SearchContext'

const flash = keyframes`
  from,
  2%,
  4% {
    opacity: 1;
  }

  1%,
  3% {
    opacity: 0;
  }
}`
const Wrapper = styled.div`
  font-size: 2.6em;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transform: translateY(${(props) => (props.mounted ? 0 : '200%')});
  transition: opacity 1000ms ${(props) => props.index * 100 + 100}ms,
    transform 400ms ${(props) => props.index * 100}ms ease-in-out,
    text-shadow 300ms ease-out, font-size 200ms ease-out;
  cursor: pointer;
  animation: ${flash} 25s ${(props) => props.index * 4 + 2}s infinite linear;

  &:hover {
    font-size: 3.2em;
  }
`

export default function Suggestion(props) {
  const { setSearch } = useContext(SearchContext)

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => setMounted(true), 300)
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
