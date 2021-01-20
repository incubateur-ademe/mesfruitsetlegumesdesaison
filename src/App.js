import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import ProductProvider from 'components/providers/ProductProvider'
import SearchProvider from 'components/providers/SearchProvider'

import Layout from 'components/layout/Layout'
import SearchInput from 'components/misc/SearchInput'
import CO2EModal from 'components/modals/CO2EModal'
import PEFModal from 'components/modals/PEFModal'
import LocalModal from 'components/modals/LocalModal'
import Months from 'views/Months'
import Results from 'views/Results'

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <StyleProvider>
          <UXProvider>
            <ModalProvider>
              <ProductProvider>
                <SearchProvider>
                  <GlobalStyle />
                  <Layout>
                    <SearchInput />
                    <Switch>
                      <Route path='/months/:month'>
                        <Months />
                      </Route>
                      <Route path='/'>
                        <Results />
                      </Route>
                    </Switch>
                  </Layout>
                  <CO2EModal />
                  <PEFModal />
                  <LocalModal />
                </SearchProvider>
              </ProductProvider>
            </ModalProvider>
          </UXProvider>
        </StyleProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
