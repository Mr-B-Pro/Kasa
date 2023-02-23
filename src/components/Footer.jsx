import React from 'react'
import FooterLogo from "../assets/footer-logo.png"
import "./Footer.css"

// FOOTER LOGO + TEXT
function Footer() {
  return (
    // container footer
    <footer className='footer__container'>
      {/* logo kasa accueil */}
        <img className='footer__logo__kasa' src={FooterLogo} alt="" />
        {/* text */}
        <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer