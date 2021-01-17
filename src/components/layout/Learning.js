import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

import ButtonLink from 'components/base/ButtonLink'
import BarChart from 'components/charts/BarChart'

const Wrapper = styled.div`
  position: relative;
  max-width: 40em;
  margin: 0 auto 1em;
  //background: ${(props) => props.theme.colors.second};
  ${mq.small} {
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
  font-size: 10em;
  font-weight: 900;
  line-height: 0.9;

  ${mq.small} {
    font-size: 30vw;
  }
`
const Strong = styled.p`
  max-width: 29em;
  font-weight: 700;
  font-style: italic;
`
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`
export default function Learning() {
  return (
    <Wrapper id='informations'>
      <Content>
        <Statistic>256%</Statistic>
        <Strong>
          Pollution moyenne engendrée par un produit hors saison par rapport à
          un produit de saison.
        </Strong>
        <Text>
          Une tomate produite localement, mais sous une serre chauffée, génère
          environ 4 fois plus de gaz à effet de serre, que la même tomate
          produite à la bonne saison. Or, nous sommes environ 75% de Français à
          déclarer consommer des tomates en hiver. De même pour les fraises, 1
          kg consommé en hiver nécessite 25 fois plus de pétrole pour son
          transport que la même quantité produite en saison et localement.
          Bénéfiques pour le climat et la santé, les fruits et légumes de saison
          sont également meilleurs au goût.
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
          L’alimentation est le premier poste d’émission de gaz à effet de
          serre, en France, devant les transports et le logement. Or, c’est un
          domaine dans lequel chacun dispose d’une capacité d’action. Il existe
          de nombreuses solutions simples et concrètes pour limiter ces
          émissions, responsables du changement climatique. Consommer des fruits
          et légumes de saison est un excellent moyen de concilier plaisir,
          santé et climat.
        </Text>
      </Content>
    </Wrapper>
  )
}
