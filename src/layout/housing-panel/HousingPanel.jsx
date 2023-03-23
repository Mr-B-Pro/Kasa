import React from "react";
import Panel from "../../components/description-panel/DescriptionPanel.jsx";
import "./HousingPanel.css";

// SECTION 3 CARDS CARROUSSEL MAIN HOUSING
function HousingPanel() {
  return (
    // container carroussel description and equipements
    <section className="housing__panel__section">
      <Panel />
      <Panel />
    </section>
  );
}

export default HousingPanel;
