import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

import Background from 'components/layout/Background'
import SearchInput from './search/SearchInput'
import Results from './search/Results'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`

const Content = styled.div`
  width: 38em;
  margin: 0 auto 2em;
  padding-bottom: 5vw;

  ${mq.small} {
    width: auto;
    margin: 0 3vw 2em;
    padding-bottom: 5vw;
  }
`
export default function Search() {
  return (
    <Wrapper>
      <Content>
        <SearchInput />
        <Results />
        <Background />
      </Content>
    </Wrapper>
  )
}
