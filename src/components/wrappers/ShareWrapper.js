import React from "react";

import Share from "components/layout/Share";

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      messages={{
        mail: {
          simulator: {
            subject: `Découvrez et intégrez la page web du SEVADEC "Fruits et légumes de saison du Calaisis"  🍄 `,
            body: `Bonjour,

Vous souhaitez sensibiliser votre communauté ou collaborateurs et les accompagner dans une consommation plus responsable et locale ?

Retrouvez tous les produits du mois grâce à cette page web "Fruits et légumes de saison du Calaisis" !

Découvrez le ici : `,
          },
          result: {
            subject: `Découvre mon résultat sur la page web du SEVADEC "Fruits et légumes de saison du Calaisis"  🍄 `,
            body: `Bonjour,

Voici un résultat de recherche sur le site "Fruits et légumes de saison du Calaisis" que je voulais partager avec toi : `,
          },
        },
        facebook: {
          simulator: {
            quote:
              "Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Grâce à cette page web du SEVADEC, retrouvez tous les fruits et légumes du mois et consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍",
          },
          result: {
            quote: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Voici les résultats de ma recherche sur cette page web du SEVADEC. Vous aussi consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍`,
          },
        },
        twitter: {
          simulator: {
            title:
              "Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Grâce à cette page web du SEVADEC, retrouvez tous les fruits et légumes du mois et consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍",
          },
          result: {
            title: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Voici les résultats de ma recherche sur cette page web du SEVADEC. Vous aussi consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍`,
          },
        },
        linkedin: {
          simulator: {
            source: "Mes Fruits et Légumes de saison",
          },
          result: {
            source: `Mes Fruits et Légumes de saison`,
          },
        },
        whatsapp: {
          simulator: {
            title:
              "Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Grâce à cette page web du SEVADECr, retrouvez tous les fruits et légumes du mois et consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍",
          },
          result: {
            title: `Découvrez vous aussi quels sont les fruits et légumes du mois ! 🍄🗓️ Voici les résultats de ma recherche sur cette page web du SEVADEC. Vous aussi consommez de saison toute l’année ! Un petit pas pour votre assiette, un grand pas pour l’environnement  🍽️ 🌍`,
          },
        },
      }}
    />
  );
}
