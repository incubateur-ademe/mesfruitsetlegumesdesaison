import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from 'components/base/Modal'

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
        ainsi que de mieux connaître la qualité et l’origine des produits. Quand
        on consomme des aliments qui viennent de loin, il ne faut pas oublier
        que ces produits ont du faire un long voyage pour arriver jusque notre
        assiette. L’avion est le mode de transport le plus consommateur
        d’énergie et émetteur de gaz à effet de serre, suivi par le transport
        terrestre et le bateau.
      </Text>
    </Modal>
  )
}
