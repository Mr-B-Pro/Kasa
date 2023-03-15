import React from 'react'
import ApartmentCard from "../../components/apartment-card/apartment-card.jsx"
import "./home-grid.css"

function homeGrid() {
  return (
    <section className='home__grid__container'>
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
    </section>
  )
}

export default homeGrid