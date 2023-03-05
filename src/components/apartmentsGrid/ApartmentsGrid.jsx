import React from 'react'
import "./ApartmentsGrid.css"
import Apartment from "./apartment/Apartment.jsx"

// SECTION 2 APARTMENTSGRID MAIN HOME
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