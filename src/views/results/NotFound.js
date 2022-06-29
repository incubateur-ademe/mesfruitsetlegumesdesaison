import React from 'react'
import styled from 'styled-components'

import Tile from 'components/misc/Tile'
import Suggestions from 'components/misc/Suggestions'

const Title = styled.h3`
  position: relative;
  margin-bottom: 1rem;
  font-size: 1.5em;
`
const Text = styled.p`
  position: relative;
  margin-bottom: 2em;
`
export default function NotFound(props) {
  return (
    <Tile>
      <Title>Désolé, nous n'avons rien trouvé :(</Title>
      <Text>Essayez un de ces produits :</Text>
      <Suggestions length={5} iframe={props.iframe} />
    </Tile>
  )
}
