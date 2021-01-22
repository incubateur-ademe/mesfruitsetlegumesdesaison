import React, { useContext, useRef } from 'react'
import styled from 'styled-components'

import useOnScreen from 'hooks/useOnScreen'
import ModalContext from 'utils/ModalContext'

import ButtonLink from 'components/base/ButtonLink'
import BarChart from 'components/charts/BarChart'

const Wrapper = styled.div`
  position: relative;
  max-width: 40em;
  margin: 0 auto 1em;

  ${(props) => props.theme.mq.small} {
    margin: 0 3vw 1em;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.background};
    filter: blur(20px);
  }
`
const Content = styled.div`
  position: relative;
`
const Statistic = styled.div`
  display: flex;
  margin-bottom: 1em;
`
const Number = styled.div`
  font-size: 21em;
  font-weight: 900;
  line-height: 0.71;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1000ms;

  ${(props) => props.theme.mq.small} {
    font-size: 49vw;
  }
`
const BigText = styled.div`
  font-size: 9.5em;
  font-weight: 900;
  line-height: 0.8;
  text-transform: uppercase;

  ${(props) => props.theme.mq.small} {
    font-size: 22vw;
  }
`
const Line = styled.div`
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1000ms ${(props) => (props.bottom ? '800ms' : '400ms')};
`
const StrongWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Strong = styled.p`
  max-width: 23.75em;
  margin-right: 1em;
  font-size: 1.25em;
  font-weight: 700;
  font-style: italic;
  text-align: right;

  ${(props) => props.theme.mq.small} {
    margin-right: 0;
    text-align: left;
  }
`
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
const StyledLink = styled.span`
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`
export default function Learning() {
  const { setCO2E } = useContext(ModalContext)

  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '-100px')

  return (
    <Wrapper id='informations'>
      <Content>
        <Statistic ref={ref}>
          <Number isOnScreen={isOnScreen}>4</Number>
          <BigText>
            <Line isOnScreen={isOnScreen}>fois</Line>
            <Line isOnScreen={isOnScreen} bottom>
              plus
            </Line>
          </BigText>
        </Statistic>
        <StrongWrapper>
          <Strong>
            de{' '}
            <StyledLink onClick={() => setCO2E(true)}>
              kgCO<sub>2</sub>e
            </StyledLink>{' '}
            générés par une tomate produite hors saison par rapport à la même
            tomate produite à la bonne saison.
          </Strong>
        </StrongWrapper>
        <Text>
          Or, nous sommes environ 75% de Français à déclarer consommer des
          tomates en hiver. De même pour les fraises, 1 kg consommé en hiver
          génère 40% d'émissions de gaz à effet de serre de plus que la même
          quantité produite en saison. Bénéfiques pour le climat et la santé,
          les fruits et légumes de saison sont également meilleurs au goût.
        </Text>
        <BarChart />
        <ButtonWrapper>
          <ButtonLink
            href={
              'https://www.ademe.fr/sites/default/files/assets/documents/calendrier-fruits-legumes-de-saison.pdf'
            }
          >
            Je télécharge le calendrier des fruits et légumes de saison
          </ButtonLink>
        </ButtonWrapper>
        <Text>
          25% des émissions de gaz à effet de serre d'un Français sont liées à
          l'alimentation, devant les transports et le logement. Or, c’est un
          domaine dans lequel chacun dispose d’une capacité d’action. Il existe
          de nombreuses solutions simples et concrètes pour limiter ces
          émissions, responsables du changement climatique.
        </Text>
        <Text>
          Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
          calculer votre empreinte sur le climat grace à notre simulateur{' '}
          <a
            href={'https://nosgestesclimat.fr/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            Nos Gestes Climat
          </a>
        </Text>
        <ButtonWrapper>
          <ButtonLink href={'https://nosgestesclimat.fr/'}>
            Je calcule mon empreinte carbone
          </ButtonLink>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
