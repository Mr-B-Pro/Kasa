import React from 'react'
import banner from "../../assets/banner.png"
import "./Banner.css"

// SECTION 1 BANNER MAIN ACCUEIL
function Banner() {
  return (
    // container banner 
      <section className='section__banner'>  
        <img className='banner__img' src= {banner} alt="Bannière pour la page d'accueil qui représente des falaises et des plages." />
        {/* transparency effect banner */}
        <div className='banner__overlay'></div>
        {/* text */}
        <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
      </section>
  )
}

export default Banner