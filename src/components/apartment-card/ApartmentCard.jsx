// COMPENENT APARTMENT CARD

import React from "react";
// imporation de NavLink qui fournit un moyen déclaratif pour naviguer dans l'application. Il permet aussi d'appliquer le soulignement d'un lien quand il est actif.
import { NavLink } from "react-router-dom";
// importation du css du composant ApartmentCard
import "./ApartmentCard.css";

// props sont des donnée transmises à un composant React.
function ApartmentCard(props) {
  // state sert à récupérer l'id de l'appartement
  const state = {
    apartmentId: props.id,
  };

  return (
    // Lien vers l'appartement qu'on aura séléctionné et ses données
    // NavLink sert à naviguer sans refaire de requete au server
    // state sert à trouver la props qui correspond à l'id de l'appartement séléctionné
    <NavLink to="/housing" state={state}>
      <div className="apartment__container">
        <img
          className="apartment__img"
          // props.imageUrl est l'image qui correspond à l'appartement séléctionné
          src={props.imageUrl}
          alt="Représente l'intérieur d'un appartement."
        />
        <div className="apartment__overlay"></div>
        {/* props.title est le nom de l'appartement séléctionné */}
        <h2 className="apartment__title">{props.title}</h2>
      </div>
    </NavLink>
  );
}

export default ApartmentCard;
