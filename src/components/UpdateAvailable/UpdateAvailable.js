import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1em;
  text-align: center;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.second};
  cursor: pointer;
`
export default function UpdateAvailable() {
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    window['isUpdateAvailable'].then((isAvailable) => setUpdate(isAvailable))
  }, [])

  return update ? (
    <Wrapper onClick={() => window.location.reload()}>
      Une nouvelle version est disponible. Cliquez ici pour l'obtenir.
    </Wrapper>
  ) : (
    ''
  )
}
