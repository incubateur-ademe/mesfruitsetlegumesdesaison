import React, { Suspense } from 'react'
import styled from 'styled-components'

import Header from 'components/layout/Header'
import IframeFooter from 'components/layout/IframeFooter'
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
        sources={[
          {
            label: 'ADEME',
            href: 'https://www.ademe.fr/calendrier-fruits-legumes-saison',
          },
          { label: 'AGRIBALYSE®', href: 'http://www.agribalyse.fr/' },
        ]}
      />
    </Wrapper>
  )
}
