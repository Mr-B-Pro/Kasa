import React from "react";
import { NavLink } from "react-router-dom";
import "./ApartmentCard.css";

function ApartmentCard(props) {
  const state = {
    apartmentId: props.id,
  };

  return (
    <NavLink to="/housing" state={state}>
      <div className="apartment__container">
        <img
          className="apartment__img"
          src={props.imageUrl}
          alt="Représente l'intérieur d'un appartement."
        />
        <div className="apartment__overlay"></div>
        <h2 className="apartment__title">{props.title}</h2>
      </div>
    </NavLink>
  );
}

export default ApartmentCard;
