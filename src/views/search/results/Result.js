import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

import Year from './result/Year'

const currentMonth = new Date().getMonth()

const Wrapper = styled.div`
  margin-bottom: 2em;
  padding: 2em;
  background: ${(props) => props.theme.colors.second};
  border-radius: 1em;

  ${mq.small} {
    padding: 1.5em 1em;
  }
`
const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 2.5em;
  //font-family: ${(props) => props.theme.fonts.body};
  line-height: 1;
`
const Text = styled.p`
  margin: 1em 0 0;
  text-align: center;
`
export default function Result(props) {
  return (
    <Wrapper index={props.index}>
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
