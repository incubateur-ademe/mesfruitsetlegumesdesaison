import React from 'react'
import styled from 'styled-components'

import ademe from './assets/ademe.jpg'
import repufrancaise from './assets/repufrancaise.jpg'
import ecolab from './assets/ecolab.png'

import ButtonLink from 'components/base/ButtonLink'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.second};
  transition: all 600ms;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.width || '40em'};
  margin: 0 auto 2em;
  padding: 1em 0 0;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    align-items: inherit;
    margin: 0 3vw 2em;
  }
`
const Text = styled.p`
  flex: 1;
  max-width: 20em;
`
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`
const Logo = styled.img`
  width: 7em;
`

export default function Footer(props) {
  return (
    <Wrapper>
      <Content>
        <Text>Ce simulateur est développé par Datagir pour l'ADEME</Text>
        <ButtonLink href='http://mes-fruits-et-legumes-de-saisons.netlify.app#informations'>
          Je veux en savoir plus
        </ButtonLink>
      </Content>
      <LogosWrapper>
        <Logos>
          <Logo src={repufrancaise} alt='République Française' />
          <Logo src={ademe} alt='ADEME' />
          <Logo src={ecolab} alt='Ecolab' />
        </Logos>
      </LogosWrapper>
    </Wrapper>
  )
}
