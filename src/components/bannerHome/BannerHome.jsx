import React from 'react'
import bannerHome from "../../assets/banner-home.png"
import bannerHomeSmartphone from "../../assets/banner-home-smartphone.png"
import "./BannerHome.css"

// SECTION 1 BANNER MAIN HOME
function Banner() {
  return (
    // container banner 
      <section className='section__bannerHome'>  
        <img className='bannerHome__img' src= {bannerHome} alt="Bannière pour la page d'accueil qui représente des falaises et des plages." />
        <img className='bannerHome__img__smartphone' src= {bannerHomeSmartphone} alt="Bannière pour la page d'accueil qui représente des falaises et des plages." />
        {/* transparency effect banner */}
        <div className='bannerHome__overlay'></div>
        {/* text */}
        <h1 className='bannerHome__title'>Chez vous, partout et ailleurs</h1>
      </section>
  )
}

export default Banner