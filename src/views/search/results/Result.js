import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { currentMonth } from 'utils/months'
import Year from './result/Year'

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
`
const Title = styled.h2`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 2.5em;
  line-height: 1;
`
const Text = styled.p`
  position: relative;
  margin: 1em 0 0;
  text-align: center;
`
export default function Result(props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Wrapper index={props.index} mounted={mounted}>
      <Title>
        <span>{props.product.label.fr}</span>
        <span>{props.product.emoji}</span>
      </Title>
      <Year months={props.product.months} />
      {props.product.text && (
        <Text>
          {
            props.product.text[
              props.product.months.includes(currentMonth) ? 'in' : 'out'
            ]
          }
        </Text>
      )}
    </Wrapper>
  )
}
