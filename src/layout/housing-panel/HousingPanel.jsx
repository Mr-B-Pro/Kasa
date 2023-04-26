import React from "react";
import Panel from "../../components/description-panel/DescriptionPanel.jsx";
import "./HousingPanel.css";
import "./HousingAccordion.css";

// SECTION 3 CARDS CARROUSSEL MAIN HOUSING
function HousingPanel(props) {
  return (
    // container carroussel description and equipements
    <section className="housing__panel__section">
      <Panel title="Description" content={props.flat.description} />
      <Panel
        title="Équipements"
        content={props.flat.equipments.map((eq, eqKey) => (
          <li key={eqKey}>{eq}</li>
        ))}
      />
    </section>
  );
}

export default HousingPanel;
