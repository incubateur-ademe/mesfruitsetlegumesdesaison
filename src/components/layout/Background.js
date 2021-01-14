import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import icons from './background/icons'

const Wrapper = styled.div`
  position: absolute;
  top: 1em;
  left: -10vw;
  right: -10vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  opacity: 0.2;

  ${mq.small} {
    display: none;
  }
`
const Item = styled.div`
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transform: translateY(${(props) => (props.mounted ? 0 : '200%')});
  transition: opacity 1000ms ${(props) => props.index * 100 + 2500}ms,
    transform 400ms ${(props) => props.index * 100 + 2400}ms ease-in-out;

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
  const [mounted, setMounted] = useState(false)
  const [iconsToDisplay, setIconsToDisplay] = useState([])

  useEffect(() => {
    for (let i = icons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[icons[i], icons[j]] = [icons[j], icons[i]]
    }
    setIconsToDisplay([...icons, ...icons])
  }, [])
  useEffect(() => {
    if (iconsToDisplay.length) {
      setMounted(true)
    }
  }, [iconsToDisplay])
  return (
    <Wrapper>
      {iconsToDisplay.map((icon, index) => (
        <Item mounted={mounted} index={index}>
          {icon}
        </Item>
      ))}
    </Wrapper>
  )
}
