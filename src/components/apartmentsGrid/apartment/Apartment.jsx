import React from "react";
import { NavLink } from "react-router-dom";
import "./Apartment.css";

// SUB SECTION 2 APARTMENT MAIN HOME
function Apartment() {
  return (
    // container apartement
    <NavLink to="/housing">
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
