import React from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../assets/header-logo.png";
import "./Header.css";

// HEADER LOGO + NAVBAR
function Header() {
  return (
    // container header
    <header className="header__container">
      {/* logo kasa accueil */}
      <NavLink to="/">
      <img
        className="header__logo__kasa"
        src={HeaderLogo}
        alt="Logo de la plateforme web de location d'appartements entre particuliers Kasa."
      />
      </NavLink>

      {/* container navbar */}
      <nav className="navbar__container">
        <NavLink to="/">
          <div className="navbar__accueil">Accueil</div>
        </NavLink>
        <NavLink to="/about">
          <div className="navbar__a-propos">A propos</div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
