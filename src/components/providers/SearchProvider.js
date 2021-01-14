import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import SearchContext from 'utils/SearchContext'

export default function CO2NumberProvider(props) {
  const history = useHistory()

  const [search, setSearch] = useQueryParam(
    'search',
    withDefault(StringParam, '')
  )

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch: (newSearch) => {
          history.replace({
            pathname: '/',
          })
          setSearch(newSearch)
        },
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
