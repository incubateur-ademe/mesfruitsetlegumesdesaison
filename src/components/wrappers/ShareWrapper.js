import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      messages={{
        mail: {
          simulator: {
            subject: `Découvrez et intégrez le simulateur de l'ADEME Mes Fruits et Légumes de saison  🍄 `,
            body: `Bonjour,

Vous souhaitez sensibiliser votre communauté ou collaborateurs et les accompagner dans une consommation plus responsable et locale ?

Retrouvez tous les produits du mois grâce à ce simulateur Mes Fruits et Légumes de Saison !

Découvrez le ici : `,
          },
          result: {
            subject: `Découvre mon résultat sur le simulateur de l'ADEME Mes Fruits et Légumes de saison  🍄 `,
            body: `Bonjour,

Voici un résultat de recherche sur le site Mes Fruits et Légumes de saison que je voulais partager avec toi : `,
          },
        },
        facebook: {
          simulator: {
            quote:
              'Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️',
          },
          result: {
            quote: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️`,
          },
        },
        twitter: {
          simulator: {
            title:
              'Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️',
          },
          result: {
            title: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️`,
          },
        },
        linkedin: {
          simulator: {
            source: 'Mes Fruits et Légumes de saison',
          },
          result: {
            source: `Mes Fruits et Légumes de saison`,
          },
        },
        whatsapp: {
          simulator: {
            title:
              'Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️',
          },
          result: {
            title: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️`,
          },
        },
      }}
    />
  )
}
