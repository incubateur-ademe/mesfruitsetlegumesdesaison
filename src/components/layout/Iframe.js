import React, { Suspense } from 'react'
import styled from 'styled-components'

import Header from 'components/layout/Header'
import IframeFooter from '@bit/datagir.simulateurs.iframe-footer'
const Background = React.lazy(() => import('components/layout/Background'))

const Wrapper = styled.div``
const Content = styled.div`
  width: 40em;
  margin: 0 auto 2em;
  padding-bottom: 5vw;

  ${(props) => props.theme.mq.small} {
    width: auto;
    margin: 0 3vw 2em;
  }
`
export default function Iframe(props) {
  return (
    <Wrapper>
      <Suspense fallback={''}>
        <Background />
      </Suspense>
      <Content>
        <Header iframe />
        {props.children}
      </Content>
      <IframeFooter
        about={'https://mesfruitsetlegumesdesaison.fr#informations'}
      />
    </Wrapper>
  )
}
