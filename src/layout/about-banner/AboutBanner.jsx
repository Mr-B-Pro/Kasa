// LAYOUT ABOUT BANNER

import React from "react";
// importation de l'image du banner desktop de à propos
import AboutImg from "../../assets/about-img/about-banner.png";
// // importation de l'image du banner smartphone de à propos
import AboutImgSmartphone from "../../assets/about-img/about-banner-smartphone.png";
// importation du css du layout AboutBanner
import "./AboutBanner.css";

function AboutBanner() {
  return (
    <section className="banner__about__section">
      <img
        className="banner__about__img"
        src={AboutImg}
        alt="Bannière pour la page d'a propos qui répresente des montagnes"
      />

      <img
        className="banner__about__img__smartphone"
        src={AboutImgSmartphone}
        alt="Bannière pour la page d'a propos qui répresente des montagnes."
      />

      <div className="banner__about__overlay"></div>
    </section>
  );
}

export default AboutBanner;
