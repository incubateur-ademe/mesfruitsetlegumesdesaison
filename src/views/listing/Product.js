import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import { months } from 'utils/months'

const Wrapper = styled.div`
  width: calc(50% - 2em);
  margin: 0px 1em 2em;

  ${mq.small} {
    width: calc(50% - 3vw);
    margin: 0px 1.5vw 3vw;
  }
`
const Content = styled.div`
  position: relative;
  padding: 1em;
  height: 100%;
  background: ${(props) => props.theme.colors.second};

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
  font-size: 1.3em;
  line-height: 1;
`
const Emoji = styled.span`
  font-style: normal;
`
const Date = styled.p`
  position: relative;
`
export default function Product(props) {
  const [interval, setInterval] = useState([])

  useEffect(() => {
    const orderedMonths = props.product.months.sort((a, b) => (a > b ? 1 : -1))
    console.log(orderedMonths, orderedMonths.includes(11))
    if (orderedMonths.includes(11) && orderedMonths.includes(0)) {
      for (let i = orderedMonths.length - 1; i >= 0; i--) {
        if (orderedMonths[i] !== orderedMonths[i - 1] + 1) {
          console.log(orderedMonths[i], orderedMonths[i - 1])
          setInterval([orderedMonths[i], orderedMonths[i - 1]])
          break
        }
      }
    } else {
      setInterval([orderedMonths[0], orderedMonths[orderedMonths.length - 1]])
    }
  }, [props.product])
  return (
    <Wrapper>
      <Content>
        <Title>
          <span>{props.product.label.fr}</span>
          <Emoji>{props.product.emoji}</Emoji>
        </Title>
        <Date>
          {props.product.months.length === 12 ? (
            `Toute l'année :)`
          ) : (
            <>
              {[3, 7, 9].includes(interval[0]) ? `D'` : 'De '}
              {months[interval[0]]} à {months[interval[1]]} :)
            </>
          )}
        </Date>
      </Content>
    </Wrapper>
  )
}
