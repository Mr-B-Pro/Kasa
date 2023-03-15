import React from "react";
import HousingImg from "../../assets/housing-img/housing-banner.png";
import HousingImgSmartphone from "../../assets/housing-img/housing-banner-smartphone.png";
import "./housing-banner.css";

// SECTION 1 BANNER CARROUSSEL MAIN HOUSING
function housingBanner() {
  return (
    <section className="banner__housing__section">
      <span className="banner__housing__arrowLeft">
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="banner__housing__arrowRight">
        <i className="fas fa-chevron-right"></i>
      </span>
      <div>
        
      </div>
      <img
        className="banner__housing__img"
        src={HousingImg}
        alt="Bannière pour la page d'accueil qui représente des appartements."
      />
      <img
        className="banner__housing__smartphone__img"
        src={HousingImgSmartphone}
        alt="Bannière pour la page d'accueil qui représente des appartements."
      />
    </section>
  );
}

export default housingBanner;
