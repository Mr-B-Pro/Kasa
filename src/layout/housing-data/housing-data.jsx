import React from "react";
import Star from "../../components/star/star.jsx"
import Filter from "../../components/filter/filter.jsx";
import "./housing-data.css";

function housingData() {
  return (
    <section className="housing__data__section">
      <div className="housing__data__container__titlesAndFilters">
        <div className="housing__data__container__titles">
          <h1 className="housing__data__title">
            Cozy loft on the Canal Saint-Martin
          </h1>
          <h2 className="housing__data__subTitle">Paris, Île-de-France</h2>
        </div>

        <div className="housing__data__container__filters">
          <Filter />
          <Filter />
          <Filter />
        </div>
      </div>

      <div className="housing__data__container__profilAndStars">
        <div className="housing__data__container__profil__nameAndBadge">
          <h2 className="housing__data__profil__name">
            Alexandre <br /> Dumas
          </h2>
          <div className="housing__data__profil__badge"></div>
        </div>

        <div className="housing__data__container__profil__stars">        
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

export default housingData;
