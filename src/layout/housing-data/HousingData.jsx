import React from "react";
import Filter from "../../components/filter/Filter.jsx";
import "./HousingData.css";

function HousingData(props) {
  return (
    <section className="housing__data__section">
      <div className="housing__data__container__titlesAndFilters">
        <div className="housing__data__container__titles">
          <h1 className="housing__data__title">{props.flat.title}</h1>
          <h2 className="housing__data__subTitle">{props.flat.location}</h2>
        </div>

        <div className="housing__data__container__filters">
          {props.flat.tags.map((tag, tagKey) => (
            <Filter key={tagKey} tags={tag} />
          ))}
        </div>
      </div>

      <div className="housing__data__container__profilAndStars">
        <div className="housing__data__container__profil__nameAndBadge">
          <h2 className="housing__data__profil__name">
            {props.flat.host.name.split(" ")[0]} <br />
            {props.flat.host.name.split(" ")[1]}
          </h2>
          <div className="housing__data__profil__badge">
            <img
              className="housing__data__profil__img"
              src={props.flat.host.picture}
              alt="Profil de l'utilisateur dans la page de l'appartement."
            />
          </div>
        </div>

        <div className="housing__data__container__profil__stars">
          {[1, 2, 3, 4, 5].map((num, numKey) => (
            <div key={numKey} className="star__container">
              <span
                key={numKey}
                className={props.flat.rating >= num ? "on" : " "}
              >
                ★
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HousingData;
