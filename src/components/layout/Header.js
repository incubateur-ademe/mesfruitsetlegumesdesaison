import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import UXContext from 'utils/UXContext'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 4vh auto;
  font-size: 5em;

  ${(props) => props.theme.mq.small} {
    margin: 4vh 0;
    padding: 0 3vw;
    font-size: 12vw;
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: inherit;
  line-height: 1.1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.background};
    filter: blur(20px);
  }

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }
`
const Top = styled.span`
  position: relative;
  align-self: flex-start;
  display: block;

  &:before {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0.3rem;
    left: -0.5rem;
    width: 100%;
    color: ${(props) => props.theme.colors.second};
  }

  span {
    position: relative;
  }
`
const Bottom = styled(Top)`
  align-self: flex-end;
`
const ScrollToInformations = styled.a`
  position: relative;
  display: block;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  font-style: italic;
  text-align: right;

  cursor: pointer;
  ${(props) => props.theme.mq.small} {
    font-size: 0.875rem;
  }
`
export default function Header() {
  const { displayTitle } = useContext(UXContext)

  return (
    <Wrapper>
      {displayTitle ? (
        <>
          <Title>
            <Link to='/'>
              <Top text={'Est-ce bien'}>
                <span>Est-ce bien</span>
              </Top>
              <Bottom text={'la saison ?'}>
                <span>la saison ?</span>
              </Bottom>
            </Link>
          </Title>
          <ScrollToInformations href={'#informations'}>
            Pourquoi choisir des produits de saison ?
          </ScrollToInformations>
        </>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
