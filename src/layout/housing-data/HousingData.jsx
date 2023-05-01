// LAYOUT HOUSING DATA

import React from "react";
// importation du composant Filter
import Filter from "../../components/filter/Filter.jsx";
// importation du css du layout HousingData
import "./HousingData.css";

// props sont des donnée transmises à un composant React.
function HousingData(props) {
  return (
    <section className="housing__data__section">
      <div className="housing__data__container__titlesAndFilters">
        <div className="housing__data__container__titles">
          <h1 className="housing__data__title">{props.flat.title}</h1>
          <h2 className="housing__data__subTitle">{props.flat.location}</h2>
        </div>

        <div className="housing__data__container__filters">
          {/* la méthode map permet d'itérer sur les données et de retourner un tableau avec tous les éléments */}
          {props.flat.tags.map((tag, tagKey) => (
            // composant des filtres des appartements
            // tagKey permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants dans le DOM, la key aide React à identifier quels éléments ont été ajoutés ou supprimés
            // tag sert à récupérer les différents données des filtres des appartements de façon dynamique
            <Filter key={tagKey} tags={tag} />
          ))}
        </div>
      </div>

      <div className="housing__data__container__profilAndStars">
        <div className="housing__data__container__profil__nameAndBadge">
          <h2 className="housing__data__profil__name">
            {/* props.flat.host.name sert à récupérer les différents noms des utilisateurs de façon dynamique*/}
            {/* la méthode split sert à séparer le prénom et le nom */}
            {props.flat.host.name.split(" ")[0]} <br />
            {props.flat.host.name.split(" ")[1]}
          </h2>
          <div className="housing__data__profil__badge">
            <img
              className="housing__data__profil__img"
              // props.flat.host.picture sert à récupérer les différentes images de profils des utilisateurs de façon dynamique
              src={props.flat.host.picture}
              alt="Profil de l'utilisateur dans la page de l'appartement."
            />
          </div>
        </div>

        <div className="housing__data__container__profil__stars">
          {[1, 2, 3, 4, 5].map((num, numKey) => (
            // numKey permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants dans le DOM, la key aide React à identifier quels éléments ont été ajoutés ou supprimés
            <div key={numKey} className="star__container">
              <span
                key={numKey}
                // props.flat.rating sert à récupérer les différentes étoiles des appartements de façon dynamique
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
