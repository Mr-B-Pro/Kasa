import React from 'react'
import banner from "../assets/banner.png"
import "./Banner.css"

function Banner() {
  return (
    <main>
      <section className='section__banner'>  
        <img className='banner__img' src= {banner} alt="Bannière pour la page d'accueil qui représente des falaises et des plages." />
        <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
      </section>
    </main>
  )
}

export default Banner