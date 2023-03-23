import React from "react";
import FooterLogo from "../../assets/footer-img/footer-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer__container">
      <img
        className="footer__logo__kasa"
        src={FooterLogo}
        alt="Représente le logo de la plateforme web de location d'appartements entre particuliers Kasa."
      />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
