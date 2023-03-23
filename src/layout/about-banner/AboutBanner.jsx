import React from "react";
import HomeImg from "../../assets/about-img/about-home.png";
import HomeImgSmartphone from "../../assets/about-img/about-banner-smartphone.png";
import "./AboutBanner.css";

function AboutBanner() {
  return (
    <section className="banner__about__section">
      <img
        className="banner__about__img"
        src={HomeImg}
        alt="Bannière pour la page d'a propos qui répresente des montagnes"
      />

      <img
        className="banner__about__img__smartphone"
        src={HomeImgSmartphone}
        alt="Bannière pour la page d'a propos qui répresente des montagnes."
      />

      <div className="banner__about__overlay"></div>
    </section>
  );
}

export default AboutBanner;
