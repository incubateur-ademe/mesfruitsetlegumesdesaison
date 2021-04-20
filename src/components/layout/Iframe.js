import React, { Suspense } from 'react'
import styled from 'styled-components'

import IframeFooter from 'components/layout/IframeFooter'
import Background from 'components/misc/Background'
import Header from 'components/misc/Header'

const Wrapper = styled.div``
const Content = styled.div`
  position: relative;
  width: 46rem;
  margin: 0 auto;
  padding: 2rem 0.5rem;

  ${(props) => props.theme.mq.small} {
    width: 100%;
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
      <IframeFooter about='http://mesfruitsetlegumesdesaison.fr/' />
    </Wrapper>
  )
}
