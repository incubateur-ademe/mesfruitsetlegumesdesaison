import React from 'react'
import styled from 'styled-components'

import ButtonLink from 'components/base/ButtonLink'

const Wrapper = styled.div`
  margin-bottom: 3em;
`
const Title = styled.h2``
const Paragraph = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`
export default function About() {
  return (
    <Wrapper>
      <Title>Préférons les produits de saison !</Title>
      <Paragraph>
        L’alimentation est le premier poste d’émission de gaz à effet de serre,
        en France, devant les transports et le logement. Or, c’est un domaine
        dans lequel chacun dispose d’une capacité d’action. Il existe de
        nombreuses solutions simples et concrètes pour limiter ces émissions,
        responsables du changement climatique. Consommer des fruits et légumes
        de saison est un excellent moyen de concilier plaisir, santé et climat.
      </Paragraph>
      <ButtonWrapper>
        <ButtonLink
          href={
            'https://www.ademe.fr/sites/default/files/assets/documents/calendrier-fruits-legumes-de-saison.pdf'
          }
        >
          Imprimer le calendrier des fruits et légumes de saison
        </ButtonLink>
      </ButtonWrapper>
      <Paragraph>
        Une tomate produite localement, mais sous une serre chauffée, génère
        environ 7 fois plus de gaz à effet de serre, que la même tomate produite
        à la bonne saison. Or, nous sommes environ 75% de Français à déclarer
        consommer des tomates en hiver. De même pour les fraises, 1 kg consommé
        en hiver nécessite 25 fois plus de pétrole pour son transport que la
        même quantité produite en saison et localement. Bénéfiques pour le
        climat et la santé, les fruits et légumes de saison sont également
        meilleurs au goût.
      </Paragraph>
    </Wrapper>
  )
}
