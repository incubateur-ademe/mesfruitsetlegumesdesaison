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
              'Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Grâce à ce simulateur Datagir, retrouvez tous les fruits et légumes du mois et consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍',
          },
          result: {
            quote: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Voici les résultats de ma recherche sur ce simulateur Datagir. Vous aussi consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍`,
          },
        },
        twitter: {
          simulator: {
            title:
              'Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Grâce à ce simulateur @_datagir, retrouvez tous les fruits et légumes du mois et consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍',
          },
          result: {
            title: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Voici les résultats de ma recherche sur ce simulateur @_datagir. Vous aussi consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍`,
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
              'Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Grâce à ce simulateur Datagir, retrouvez tous les fruits et légumes du mois et consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍',
          },
          result: {
            title: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Voici les résultats de ma recherche sur ce simulateur Datagir. Vous aussi consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍`,
          },
        },
      }}
    />
  )
}
