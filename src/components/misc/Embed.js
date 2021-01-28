import React, { useContext } from 'react'

import StyleContext from 'utils/StyleContext'
import UXContext from 'utils/UXContext'
import SearchContext from 'utils/SearchContext'

import EmbedConfigurator from '@bit/datagir.simulateurs.embed-configurator'

export default function Embed() {
  const { themes, theme, setTheme } = useContext(StyleContext)
  const {
    configuratorOpen,
    setConfiguratorOpen,
    displayTitle,
    setDisplayTitle,
  } = useContext(UXContext)
  const { search, setSearch } = useContext(SearchContext)

  return (
    <EmbedConfigurator
      configuratorOpen={configuratorOpen}
      setConfiguratorOpen={setConfiguratorOpen}
      themes={themes}
      theme={theme}
      setTheme={setTheme}
      options={[
        {
          label: 'Rentrez un fruit ou un légume',
          value: search,
          setter: setSearch,
          type: 'text',
        },
        {
          label: 'Afficher le titre',
          value: displayTitle,
          setter: setDisplayTitle,
          default: true,
          type: 'boolean',
        },
      ]}
    />
  )
}
