import React from "react";
import Star from "./star/Star.jsx"
import Filter from "./filter/Filter.jsx";
import "./PersonalDataHousing.css";

// SECTION 2 PERSONAL DATA CARROUSSEL MAIN HOUSING
function PersonalDataHousing() {
  return (
    // container carroussel titles and filters and profil
    <section className="section__personalDataHousing">
      {/* container carroussel titles and filters */}
      <div className="personalDataHousing__container__titlesAndFilters">
        {/* container carroussel titles */}
        <div className="personalDataHousing__container__titles">
          <h1 className="personalDataHousing__title">
            Cozy loft on the Canal Saint-Martin
          </h1>
          <h2 className="personalDataHousing__subTitle">Paris, Île-de-France</h2>
        </div>

        {/* container carroussel filters */}
        <div className="personalDataHousing__container__filters">
          <Filter />
          <Filter />
          <Filter />
        </div>
      </div>

      {/* container carroussel profil */}
      <div className="personalDataHousing__container__profilAndStars">
        <div className="personalDataHousing__container__profil__nameAndBadge">
          <h2 className="personalDataHousing__profil__name">
            Alexandre <br /> Dumas
          </h2>
          <div className="personalDataHousing__profil__badge"></div>
        </div>

        <div className="personalDataHousing__container__profil__stars">        
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </section>
  );
}

export default PersonalDataHousing;
