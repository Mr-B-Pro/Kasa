import React from "react";
import { NavLink } from "react-router-dom";
import "./apartment-card.css";


function apartmentCard() {
  return (
    <NavLink to="/housing">
      <div className="apartment__container">
        {/* <img className="apartment__img" src="https://picsum.photos/300/200" alt="" /> */}
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
