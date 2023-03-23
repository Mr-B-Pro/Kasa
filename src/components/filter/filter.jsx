import React from "react";
import "./Filter.css";

function Filter(props) {
  return (
    <div className="filter__container">
      <p className="filter__text">{props.tags}</p>
    </div>
  );
}

export default Filter;
