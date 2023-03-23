import React from "react";
import "./HousingBanner.css";

// SECTION 1 BANNER CARROUSSEL MAIN HOUSING
function HousingBanner(props) {
  return (
    <section className="banner__housing__section">
      <span className="banner__housing__arrowLeft">
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="banner__housing__arrowRight">
        <i className="fas fa-chevron-right"></i>
      </span>
      <img
        className="banner__housing__img"
        src={props.imageUrl}
        alt="Bannière pour la page d'accueil qui représente des appartements."
      />
    </section>
  );
}

export default HousingBanner;
