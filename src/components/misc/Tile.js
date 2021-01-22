import React, { useContext } from 'react'
import styled from 'styled-components'

import StyleContext from 'utils/StyleContext'
import useMounted from 'hooks/useMounted'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2em;
  padding: 2em;
  background: ${(props) => props.theme.colors.second};
  border: ${(props) =>
    props.currentTheme === 'default'
      ? 'none'
      : `2px solid ${props.theme.colors.main}`};
  border-radius: ${(props) => (props.currentTheme === 'default' ? 0 : '1em')};
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1000ms ${(props) => props.index * 100}ms;

  &:before {
    content: '';
    position: absolute;
    top: 0.5em;
    left: -0.5em;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.second};
    opacity: 0.4;
  }

  ${(props) => props.theme.mq.small} {
    padding: 1em;
  }
`
export default function Tile(props) {
  const mounted = useMounted()
  const { theme } = useContext(StyleContext)
  return (
    <Wrapper index={props.index} currentTheme={theme} mounted={mounted ? 1 : 0}>
      {props.children}
    </Wrapper>
  )
}
