import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import icons from './background/icons'

const Wrapper = styled.div`
  position: absolute;
  bottom: 1em;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  opacity: 0.6;
`
const Item = styled.div`
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transform: translateY(${(props) => (props.mounted ? 0 : '200%')});
  transition: opacity 1000ms ${(props) => props.index * 100 + 700}ms,
    transform 400ms ${(props) => props.index * 100 + 600}ms ease-in-out;

  ${mq.small} {
    display: ${(props) => (props.index > 3 ? 'none' : 'block')};
  }

  svg {
    width: 5vw;
    height: auto;

    ${mq.small} {
      width: 15vw;
    }

    path {
      fill: ${(props) => props.theme.colors.second};
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
    setIconsToDisplay(icons)
  }, [])
  useEffect(() => {
    if (iconsToDisplay.length) {
      setMounted(true)
    }
  }, [iconsToDisplay])
  return (
    <Wrapper>
      {iconsToDisplay.map(
        (icon, index) =>
          index < 7 && (
            <Item mounted={mounted} index={index}>
              {icon}
            </Item>
          )
      )}
    </Wrapper>
  )
}
