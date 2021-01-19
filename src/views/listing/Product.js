import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import { months } from 'utils/months'
import UXContext from 'utils/UXContext'

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  ${mq.small} {
    padding: 0.5em;
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

  ${mq.small} {
    font-size: 0.875em;
  }
`
const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`
const Local = styled.div`
  font-size: 0.875em;
  color: ${(props) => (props.local ? '#39d05c' : '#c81d25')};
  cursor: pointer;

  span {
    ${mq.small} {
      display: none;
    }
  }
`
const Score = styled.div`
  font-size: 0.875em;
  font-style: normal;
  cursor: pointer;
`
const Sup = styled.sup`
  line-height: 0;
`
const ScoreNumber = styled.span`
  font-weight: 700;
`
export default function Product(props) {
  const { setPEF, setLocal } = useContext(UXContext)

  const [interval, setInterval] = useState([])
  useEffect(() => {
    const orderedMonths = props.product.months.sort((a, b) => (a > b ? 1 : -1))
    if (orderedMonths.includes(11) && orderedMonths.includes(0)) {
      for (let i = orderedMonths.length - 1; i >= 0; i--) {
        if (orderedMonths[i] !== orderedMonths[i - 1] + 1) {
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
              {months[interval[0]]} à {months[interval[1]]}
            </>
          )}
        </Date>
        <Flex>
          <Local onClick={() => setLocal(true)} local={props.product.local}>
            {props.product.local ? 'Local' : 'Non local'}
            {' '}
            <Sup>(?)</Sup>
          </Local>
          <Score onClick={() => setPEF(true)}>
            PEF: <ScoreNumber>{props.product.pef}</ScoreNumber> <Sup>(?)</Sup>
          </Score>
        </Flex>
      </Content>
    </Wrapper>
  )
}
