import React, { useState } from "react";
import "./HousingBanner.css";

// SECTION 1 BANNER CARROUSSEL MAIN HOUSING
function HousingBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToRight = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };
  const moveToLeft = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  return (
    <section className="banner__housing__section">
      <span onClick={moveToLeft} className="banner__housing__arrowLeft">
        <i className="fas fa-chevron-left"></i>
      </span>

      <span className="banner__housing__slideCounter">
        {currentPicture + 1} / {pictures.length}
      </span>

      <span onClick={moveToRight} className="banner__housing__arrowRight">
        <i className="fas fa-chevron-right"></i>
      </span>
      {pictures.map((pic, i) => (
        <img
          className={getClassName(i)}
          key={pic}
          src={pic}
          alt="Représente l'intérieur d'un appartement."
        ></img>
      ))}
    </section>
  );
}

export default HousingBanner;
