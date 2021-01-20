import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  position: relative;
  display: block;
  margin-bottom: 2em;

  &:before {
    content: '';
    position: absolute;
    top: 0.5em;
    left: -0.5em;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.second};
  }
`
const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 0.6em 0.8em;
  font-size: 2.2em;
  font-weight: 700;
  font-style: italic;
  color: ${(props) => props.theme.colors.second};
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  transition: box-shadow 300ms ease-out;

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 0.1em rgba(0, 0, 0, 0.3);

    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.second};
    opacity: 0.6;
    transition: opacity 300ms ease-out;
  }

  ${(props) => props.theme.mq.small} {
    width: 100%;
    font-size: 1.3em;
  }
`
export default function SearchInput() {
  const { search, setSearch } = useContext(SearchContext)
  return (
    <Wrapper>
      <Input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={'Rentrez un fruit ou un légume'}
      />
    </Wrapper>
  )
}
