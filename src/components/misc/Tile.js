import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2em;
  padding: 2em;
  background: ${(props) => props.theme.colors.second};
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

  ${mq.small} {
    padding: 1em;
  }
`
export default function Tile(props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <Wrapper index={props.index} mounted={mounted}>
      {props.children}
    </Wrapper>
  )
}
