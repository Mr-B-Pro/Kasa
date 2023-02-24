import React from "react";
import { NavLink } from "react-router-dom";
import "./Apartment.css";

// SOUS SECTION 2 APARTMENT MAIN ACCUEIL
function Apartment() {
  return (
    // container apartement
    <NavLink to="/flat">
      <div className="apartment">
        <h2 className="apartment__title">
          Titre de la
          <br />
          location
        </h2>
      </div>
    </NavLink>
  );
}

export default Apartment;
