import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from '@bit/datagir.simulateurs.modal'

const Title = styled.h2``
const Text = styled.p``
export default function LocalModal() {
  const { local, setLocal } = useContext(ModalContext)

  return (
    <Modal open={local} setOpen={setLocal}>
      <Title>Pourquoi consommer local ?</Title>
      <Text>
        Se fournir chez les agriculteurs du territoire leur permet de soutenir 
        une activité économique locale, de réduire les transports et les pertes,
        ainsi que de mieux connaître la qualité et l’origine des produits.
      </Text>
    </Modal>
  )
}
