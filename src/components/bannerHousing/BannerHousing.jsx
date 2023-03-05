import React from "react";
import bannerHousing from "../../assets/banner-housing.png";
import "./BannerHousing.css";

// SECTION 1 BANNER CARROUSSEL MAIN HOUSING
function BannerHousing() {
  return (
    // container banner housing
    <section className="section__bannerHousing">
      <span className="bannerHousing__arrowLeft">
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="bannerHousing__arrowRight">
        <i className="fas fa-chevron-right"></i>
      </span>
      <img
        className="bannerHousing__img"
        src={bannerHousing}
        alt="Bannière pour la page d'accueil qui représente des appartements."
      />
    </section>
  );
}

export default BannerHousing;
