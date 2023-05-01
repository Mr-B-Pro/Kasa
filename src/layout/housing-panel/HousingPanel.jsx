// LAYOUT HOUSING PANEL

import React from "react";
// importation du composant DescriptionPanel
import Panel from "../../components/description-panel/DescriptionPanel.jsx";
// importation du css du layout HousingPanel
import "./HousingPanel.css";

// props sont des donnée transmises à un composant React.
function HousingPanel(props) {
  return (
    <section className="housing__panel__section">
      {/* composant du panel description des appartements et ses données  */}
      {/* props.flat.description permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants dans le DOM, la key aide React à identifier quels éléments ont été ajoutés ou supprimés */}
      <Panel title="Description" content={props.flat.description} />

      {/* composant du panel équipements des appartements et ses données */}
      <Panel
        title="Équipements"
        // la méthode map permet d'itérer sur les données et de retourner un tableau avec tous les éléments
        // props.flat.equipments sert à récupérer les différents équipements des appartements de façon dynamique
        content={props.flat.equipments.map((eq, eqKey) => (
          // eqKey permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants dans le DOM, la key aide React à identifier quels éléments ont été ajoutés ou supprimés
          <li key={eqKey}>{eq}</li>
        ))}
      />
    </section>
  );
}

export default HousingPanel;
