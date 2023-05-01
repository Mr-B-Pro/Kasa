// COMPENENT FILTER

import React from "react";
// importation du css du composant Filter
import "./Filter.css";

// props sont des donnée transmises à un composant React.
function Filter(props) {
  return (
    <div className="filter__container">
      {/* props.tags sert à afficher les différents filtres des appartements de façon dynamique */}
      <p className="filter__text">{props.tags}</p>
    </div>
  );
}

export default Filter;
