import React from 'react'
import Panel from "../../components/description-panel/description-panel.jsx"
import "./housing-panel.css"

// SECTION 3 CARDS CARROUSSEL MAIN HOUSING
function housingPanel() {
  return (
      // container carroussel description and equipements
      <section className="housing__panel__section">
        <Panel />
        <Panel />
      </section>
  )
}

export default housingPanel