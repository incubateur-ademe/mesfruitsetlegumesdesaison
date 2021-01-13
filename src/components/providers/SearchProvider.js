import React from 'react'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import SearchContext from 'utils/SearchContext'

export default function CO2NumberProvider(props) {
  const [search, setSearch] = useQueryParam(
    'search',
    withDefault(StringParam, '')
  )

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
