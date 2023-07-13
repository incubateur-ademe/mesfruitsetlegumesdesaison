import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import UXContext from 'utils/UXContext'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 4vh 0;
  font-size: 5em;

  ${(props) => props.theme.mq.small} {
    margin: 0;
    padding: 2rem 3vw;
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
`
const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`
const NoLink = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
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
export default function Header(props) {
  const { displayTitle } = useContext(UXContext)

  return (
    <Wrapper>
      {displayTitle ? (
        <>
          <Title>
            {props.iframe ? (
              <NoLink>
                <Top text={'Est ce bien'}>
                  <span>Est ce bien</span>
                </Top>
                <Bottom text={'la saison ?'}>
                  <span>la saison ?</span>
                </Bottom>
              </NoLink>
            ) : (
              <StyledLink
                to={'/'}
                aria-label='Est-ce bien la saison ?'
                title={`Est ce bien la saison ? Retour à l'accueil`}
              >
                <Top text={'Est ce bien'}>
                  <span>Est ce bien</span>
                </Top>
                <Bottom text={'la saison ?'}>
                  <span>la saison ?</span>
                </Bottom>
              </StyledLink>
            )}
          </Title>
          <ScrollToInformations
            href={
              props.iframe
                ? 'https://mesfruitsetlegumesdesaison.fr#informations'
                : '#informations'
            }
            target={props.iframe ? '_blank' : '_self'}
            rel='noopener noreferrer'
          >
            Pourquoi choisir des produits de saison ?
          </ScrollToInformations>
        </>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
