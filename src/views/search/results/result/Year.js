import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { mq } from 'utils/styles'
import { abbr, currentMonth } from 'utils/months'

const Wrapper = styled.div`
  position: relative;
`
const Answer = styled.div`
  margin-bottom: 1.5rem;
  font-size: 4em;
  font-weight: 900;
  font-family: ${(props) => props.theme.fonts.body};
  font-style: none;
  text-align: center;
  line-height: 1;
  color: ${(props) => (props.valid ? '#39d05c' : '#c81d25')};
`
const Months = styled.div`
  display: flex;
`
const Month = styled(Link)`
  flex: 1;
  display: block;
  padding: 1em 0;
  background-color: ${(props) => (props.valid ? '#39d05c' : '#c81d25')};
  border: 3px solid
    ${(props) =>
      props.active ? props.theme.colors.text : props.theme.colors.second};
  border-radius: 1em;
  font-size: 0.75em;
  text-align: center;
  text-decoration: none;
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
        {props.months.includes(currentMonth) ? 'Oui :)' : 'Non :('}
      </Answer>
      <Months>
        {abbr.map((month, index) => (
          <Month
            key={month}
            to={`/months/${index}`}
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
