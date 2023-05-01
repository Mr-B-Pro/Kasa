// LAYOUT ABOUT PANEL

import React from "react";
// importation du composant DescriptionPanel
import Panel from "../../components/description-panel/DescriptionPanel.jsx";
// importation du css du layout AboutPanel
import "./AboutPanel.css";

function AboutPanel() {
  return (
    <section className="about__panel__section">
      {/* composants des panels et descriptions de ce que propose le site Kasa */}
      <Panel
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      />
      <Panel
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Panel
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <Panel
        title="Responsabilité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </section>
  );
}

export default AboutPanel;
