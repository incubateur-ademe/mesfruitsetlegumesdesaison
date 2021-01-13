import React, { useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import StyleContext from 'utils/StyleContext'

const Wrapper = styled.h1`
  display: flex;
  flex-direction: column;
  width: 5.5em;
  margin: 2rem auto;
  font-size: 6em;
  font-size: 6em;
  line-height: 0.9;

  ${mq.small} {
    font-size: 3.8em;
  }
`
const Top = styled.span`
  align-self: flex-start;
  display: block;
`
const Bottom = styled.span`
  align-self: flex-end;
  display: block;
`
export default function Header() {
  const { displayTitle } = useContext(StyleContext)

  return (
    <Wrapper>
      {displayTitle && (
        <>
          <Top>Est-ce bien</Top>
          <Bottom>la saison ?</Bottom>
        </>
      )}
    </Wrapper>
  )
}
