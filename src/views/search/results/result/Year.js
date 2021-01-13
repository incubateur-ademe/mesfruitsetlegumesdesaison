import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

const months = [
  'janv.',
  'févr.',
  'mars',
  'avr.',
  'mai',
  'juin',
  'juil.',
  'août',
  'sept.',
  'oct.',
  'nov.',
  'déc.',
]
const currentMonth = new Date().getMonth()

const Wrapper = styled.div`
  position: relative;
`
const Answer = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 4em;
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  line-height: 1;
  color: ${(props) => (props.valid ? '#39d05c' : '#c81d25')};
`
const SmileyYes = styled.span`
  letter-spacing: -0.1em;
`
const SmileyNo = styled.span`
  letter-spacing: -0.2em;
`
const Months = styled.div`
  display: flex;
`
const Month = styled.div`
  flex: 1;
  padding: 1em 0;
  background-color: ${(props) => (props.valid ? '#39d05c' : '#c81d25')};
  border: 3px solid
    ${(props) =>
      props.active ? props.theme.colors.text : props.theme.colors.second};
  border-radius: 1em;
  font-size: 0.75em;
  text-align: center;
  color: white;

  ${mq.small} {
    font-size: 0.625em;
    border-width: 1px;
  }
`
export default function Year(props) {
  return (
    <Wrapper>
      <Answer valid={props.months.includes(currentMonth)}>
        {props.months.includes(currentMonth) ? (
          <>
            Oui <SmileyYes>:)</SmileyYes>
          </>
        ) : (
          <>
            Non <SmileyNo>:(</SmileyNo>
          </>
        )}
      </Answer>
      <Months>
        {months.map((month, index) => (
          <Month
            key={month}
            valid={props.months.includes(index)}
            active={index === currentMonth}
          >
            {month}
          </Month>
        ))}
      </Months>
    </Wrapper>
  )
}
