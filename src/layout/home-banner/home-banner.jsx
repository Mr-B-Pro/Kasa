import React from "react";
import HomeImg from "../../assets/home-img/home-banner.png";
import HomeImgSmartphone from "../../assets/home-img/home-banner-smartphone.png";
import "./home-banner.css";

function homeBanner() {
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

      <div className='banner__home__overlay'></div>

      <h1 className="banner__home__title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default homeBanner;
