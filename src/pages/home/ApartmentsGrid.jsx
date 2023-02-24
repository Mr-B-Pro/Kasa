import React from 'react'
import "./ApartmentsGrid.css"
import Apartment from "./Apartment.jsx"

// SECTION 2 APARTMENTS MAIN ACCUEIL
function ApartmentsGrid() {
  return (
    // container apartments
    <section className='apartments__grid__container'>
      {/* apartments */}
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
    </section>
  )
}

export default ApartmentsGrid