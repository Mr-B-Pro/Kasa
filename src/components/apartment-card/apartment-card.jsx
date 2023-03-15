import React from "react";
import { NavLink } from "react-router-dom";
import "./apartment-card.css";


function apartmentCard() {
  return (
    <NavLink to="/housing">
      <div className="apartment__container">
        <h2 className="apartment__title">
          Titre de la
          <br />
          location
        </h2>
      </div>
    </NavLink>
  );
}

export default apartmentCard;
