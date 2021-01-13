import React, { useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import SearchContext from 'utils/SearchContext'

const Wrapper = styled.input`
  position: relative;
  display: block;
  width: 26rem;
  margin: 0 auto 2rem;
  padding: 0.3em 0;
  font-size: 2.5em;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  background: none;
  border: none;
  // box-shadow: rgba(43, 174, 173, 0.6) 0px 1px;
  box-shadow: ${(props) => props.theme.colors.main} 0px 1px;
  transition: box-shadow 100ms ease-out;

  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.colors.main} 0px 2px;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.main};
    opacity: 0.6;
  }

  ${mq.small} {
    width: 100%;
    font-size: 2em;
  }
`
export default function SearchInput() {
  const { search, setSearch } = useContext(SearchContext)
  return (
    <Wrapper
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={'Rentrez un fruit ou un légume'}
    />
  )
}
