import React from 'react'
import AboutBanner from "../../layout/about-banner/about-banner.jsx"
import AboutPannelDescription from "../../components/description-panel/description-panel.jsx"
import "./about.css"

// PAGE ABOUT
function about() {
  return (
    <main className='main__about'>
      <AboutBanner />
      <div className='about__pannel__description__container'>
      <AboutPannelDescription />
      <AboutPannelDescription />
      <AboutPannelDescription />
      <AboutPannelDescription />
      </div>
    </main>
  )
}

export default about