import React from 'react'
import FooterLogo from "../../assets/footer-img/footer-logo.png"
import "./footer.css"

function footer() {
  return (
    <footer className='footer__container'>
        <img className='footer__logo__kasa' src={FooterLogo} alt="" />
        <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default footer