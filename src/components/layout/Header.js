import React, { useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import StyleContext from 'utils/StyleContext'

const Wrapper = styled.h1`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 8em;
  max-width: 100%;
  margin: 2rem auto 2.5rem;
  font-size: 5em;
  line-height: 1.1;

  ${mq.small} {
    font-size: 3.2em;
  }
`
const Top = styled.span`
  position: relative;
  align-self: flex-start;
  display: block;

  &:before {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0.3rem;
    left: -0.5rem;
    width: 100%;
    color: ${(props) => props.theme.colors.second};
  }

  span {
    position: relative;
  }
`
const Bottom = styled(Top)`
  align-self: flex-end;
`
export default function Header() {
  const { displayTitle } = useContext(StyleContext)

  return (
    <Wrapper>
      {displayTitle && (
        <>
          <Top text={'Est-ce bien'}>
            <span>Est-ce bien</span>
          </Top>
          <Bottom text={'la saison ?'}>
            <span>la saison ?</span>
          </Bottom>
        </>
      )}
    </Wrapper>
  )
}
