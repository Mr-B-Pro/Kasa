import React from 'react'
import HeaderLogo from "../assets/header-logo.png"
import "./Header.css"

// HEADER LOGO + NAVBAR
function Header() {
  return (
    // container header
    <header className='header__container'>
        {/* logo kasa accueil */}
            <img className='header__logo__kasa' src= {HeaderLogo} alt="Logo de la plateforme web de location d'appartements entre particuliers Kasa." />
        
       {/* container navbar */}
        <nav className='navbar__container'>
        <div className='navbar__accueil'>Accueil</div>
        <div className='navbar__a-propos'>A propos</div>
        </nav>
       
    </header>
  )
}

export default Header