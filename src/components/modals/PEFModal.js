import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from 'components/base/Modal'

const Title = styled.h2``
const Text = styled.p``
export default function PEFModal() {
  const { PEF, setPEF } = useContext(ModalContext)

  return (
    <Modal open={PEF} setOpen={setPEF}>
      <Title>Le Score Environnemental "PEF"</Title>
      <Text>
        Sans unité,{' '}
        <b>
          plus le score est bas plus l'impact du produit sur l'environnement est
          faible
        </b>
        .
      </Text>
      <Text>
        Ce score unique est une moyenne pondérée de 16 indicateurs , calculé
        selon la méthodologie européenne « PEF » (Product Environmental
        Footprint).
      </Text>
      <Text>
        <b>
          Attention, ce score est donné au kg de produit, et non à l'unité !
        </b>
      </Text>
    </Modal>
  )
}
