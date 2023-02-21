import React from 'react'
import logo from "../assets/logo.png"
import "./Header.css"

function Header() {
  return (
    // header container
    <header className='header__container'>
        {/* logo kasa accueil */}
            <img className='header__logo__kasa' src= {logo} alt="Logo de la plateforme web de location d'appartements entre particuliers Kasa." />
        
       {/* navbar container */}
        <nav className='navbar__container'>
        <div className='navbar__accueil'>Accueil</div>
        <div className='navbar__a-propos'>A propos</div>
        </nav>
       
    </header>
  )
}

export default Header