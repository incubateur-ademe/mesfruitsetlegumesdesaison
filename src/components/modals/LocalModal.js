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
        Quand on consomme des aliments qui viennent de loin, il ne faut pas
        oublier que ces produits ont du faire un long voyage pour arriver jusque
        notre assiette. Qu'ils viennent en bateau ou en avion, leur transport
        engendre de grandes quantités de gaz à effet de serre relâchées dans
        l'air.
      </Text>
    </Modal>
  )
}
