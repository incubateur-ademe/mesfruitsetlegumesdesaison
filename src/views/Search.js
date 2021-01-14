import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { mq } from 'utils/styles'

import Background from 'components/layout/Background'
import SearchInput from './search/SearchInput'
import Results from './search/Results'
import Listing from 'views/Listing'

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
        <Switch>
          <Route path='/months/:month'>
            <Listing />
          </Route>
          <Route path='/'>
            <Results />
          </Route>
        </Switch>
        <Background />
      </Content>
    </Wrapper>
  )
}
