import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import { currentMonth } from 'utils/months'
import UXContext from 'utils/UXContext'

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

  ${mq.small} {
    padding: 1em;
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
const Emoji = styled.span`
  font-style: normal;
`
const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`
const Local = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  color: ${(props) => (props.local ? '#39d05c' : '#c81d25')};
  cursor: pointer;
`
const Score = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  font-style: normal;
  cursor: pointer;
`
const Sup = styled.sup`
  line-height: 0;
`
const ScoreNumber = styled.span`
  font-weight: 900;
`
const Text = styled.p`
  position: relative;
  margin: 1em 0 0;
  text-align: center;
`
export default function Result(props) {
  const { setPEF, setLocal } = useContext(UXContext)

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Wrapper index={props.index} mounted={mounted}>
      <Title>
        <span>{props.product.label.fr}</span>
        <Emoji>{props.product.emoji}</Emoji>
      </Title>
      <Year months={props.product.months} local={props.product.local} />
      <Flex>
        <Local onClick={() => setLocal(true)} local={props.product.local}>
          {props.product.local
            ? `Ce produit est local`
            : `Ce produit n'est pas local`}
          {' '}
          <Sup>(?)</Sup>
        </Local>
        <Score onClick={() => setPEF(true)}>
          PEF: <ScoreNumber>{props.product.pef}</ScoreNumber> <Sup>(?)</Sup>
        </Score>
      </Flex>
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
