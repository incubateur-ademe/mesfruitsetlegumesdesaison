import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.input`
  position: relative;
  width: 100%;
  padding: 0.8em 0.2em 0.8em 0.8em;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.main};
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
`
export default function NumberInput() {
  const { search, setSearch } = useContext(SearchContext)

  return (
    <Wrapper
      type='text'
      value={search}
      onChange={(e) => {
        setSearch(e.currentTarget.value)
      }}
      placeholder={'Rentrez un fruit ou un légume'}
    />
  )
}
