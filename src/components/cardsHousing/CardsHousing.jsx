import React from 'react'
import Card from "./card/Card.jsx"
import "./CardsHousing.css"

// SECTION 3 CARDS CARROUSSEL MAIN HOUSING
function CardsHousing() {
  return (
      // container carroussel description and equipements
      <section className="section__cardsHousing">
        <Card />
        <Card />
      </section>
  )
}

export default CardsHousing