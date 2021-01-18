import React, { useState } from 'react'
import UXContext from 'utils/UXContext'

export default function UXProvider(props) {
  const [CO2E, setCO2E] = useState(false)
  const [PEF, setPEF] = useState(false)
  const [local, setLocal] = useState(false)

  return (
    <UXContext.Provider value={{ CO2E, setCO2E, PEF, setPEF, local, setLocal }}>
      {props.children}
    </UXContext.Provider>
  )
}
