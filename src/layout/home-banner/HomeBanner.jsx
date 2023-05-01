// LAYOUT HOME BANNER

import React from "react";
// importation de l'image du banner desktop de l'accueil
import HomeImg from "../../assets/home-img/home-banner.png";
// importation de l'image du banner smartphone de l'accueil
import HomeImgSmartphone from "../../assets/home-img/home-banner-smartphone.png";
// importation du css du layout HomeBanner
import "./HomeBanner.css";

function HomeBanner() {
  return (
    <section className="banner__home__section">
      <img
        className="banner__home__img"
        src={HomeImg}
        alt="Bannière pour la page d'accueil qui représente des falaises et des plages."
      />

      <img
        className="banner__home__img__smartphone"
        src={HomeImgSmartphone}
        alt="Bannière pour la page d'accueil qui représente des falaises et des plages."
      />

      <div className="banner__home__overlay"></div>

      <h1 className="banner__home__title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default HomeBanner;
