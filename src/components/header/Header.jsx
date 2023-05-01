// COMPENENT HEADER

import React from "react";
// imporation de NavLink qui fournit un moyen déclaratif pour naviguer dans l'application. Il permet aussi d'appliquer le soulignement d'un lien quand il est actif.
import { NavLink } from "react-router-dom";
// importation du logo du header
import HeaderLogo from "../../assets/header-img/header-logo.png";
// importation du css du Header
import "./Header.css";

function Header() {
  return (
    <header className="header__container">
      {/* lien du logo qui mene vers la page accueil du site */}
      <NavLink to="/">
        <img
          className="header__logo__kasa"
          src={HeaderLogo}
          alt="Représente le logo de la plateforme web de location d'appartements entre particuliers Kasa."
        />
      </NavLink>

      <nav className="navbar__container">
        {/* lien de navigation vers la page accueil du site */}
        <NavLink to="/">
          <div className="navbar__accueil">Accueil</div>
        </NavLink>

        {/* lien de navigation vers la page à propos du site */}
        <NavLink to="/about">
          <div className="navbar__a-propos">A propos</div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
