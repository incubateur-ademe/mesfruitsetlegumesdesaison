import React from 'react'

import MagicLink from 'components/base/MagicLink'
import Footer from 'components/layout/Footer'

export default function FooterWrapper() {
  return (
    <Footer>
      <h2>D'ou viennent ces données ?</h2>
      <p>
        Ce simulateur réutilise les données du{' '}
        <MagicLink to='https://librairie.ademe.fr/consommer-autrement/5784-a-chaque-mois-ses-fruits-et-legumes-.html'>
          calendrier des fruits et légumes de saison de l'ADEME
        </MagicLink>{' '}
        et de la base de donnée{' '}
        <MagicLink to='https://agribalyse.ademe.fr/'>Agribalyse</MagicLink>.
        Agribalyse est la base de données de référence des indicateurs d'impacts
        environnementaux des produits agricoles produits en France et des
        produits alimentaires consommés en France.
      </p>
    </Footer>
  )
}
