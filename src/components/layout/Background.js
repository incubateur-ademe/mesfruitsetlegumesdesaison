import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import icons from './background/icons'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: -10vw;
  right: -10vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-height: 100%;
  opacity: 0.2;
  overflow: hidden;
  ${mq.small} {
    display: none;
  }
`
const Item = styled.div`
  margin: ${(props) =>
    props.index % 14 === 0 ? '2.5vw 2.5vw 2.5vw 10vw' : '2.5vw'};

  svg {
    width: 10vw;
    height: auto;

    path {
      fill: white;
    }
  }
`

export default function Background() {
  return (
    <Wrapper>
      {icons.map((icon, index) => (
        <Item index={index}>{icon}</Item>
      ))}
    </Wrapper>
  )
}
