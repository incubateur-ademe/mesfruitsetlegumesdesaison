import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { GlobalStyle, mq } from 'utils/styles'
import useWindowSize from 'hooks/useWindowSize'
import StyleProvider from 'components/providers/StyleProvider'
import UXProvider from 'components/providers/UXProvider'
import ProductProvider from 'components/providers/ProductProvider'
import SearchProvider from 'components/providers/SearchProvider'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import Learning from 'components/layout/Learning'
import Background from 'components/layout/Background'
import EmbedConfigurator from 'components/misc/EmbedConfigurator'
import CO2EModal from 'components/modals/CO2EModal'
import PEFModal from 'components/modals/PEFModal'
import LocalModal from 'components/modals/LocalModal'
import Search from 'views/Search'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${mq.medium} {
    flex-direction: column-reverse;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: ${(props) => props.windowHeight}px;
`
function App() {
  const { height } = useWindowSize()

  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <StyleProvider>
          <ProductProvider>
            <UXProvider>
              <SearchProvider>
                <GlobalStyle />
                <Background />
                <Wrapper>
                  <Content>
                    <FullScreen windowHeight={height}>
                      <Header />
                      <Search />
                    </FullScreen>
                    <Learning />
                    <Footer />
                  </Content>
                  <EmbedConfigurator />
                </Wrapper>
                <CO2EModal />
                <PEFModal />
                <LocalModal />
              </SearchProvider>
            </UXProvider>
          </ProductProvider>
        </StyleProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
