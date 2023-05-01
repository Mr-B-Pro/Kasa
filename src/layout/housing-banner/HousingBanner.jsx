// LAYOUT HOUSING BANNER

// importation de useState qui est un hook qui permet de gerer l'état des composants basé sur une fonction
import React, { useState } from "react";
// importation du css du layout HousingBanner
import "./HousingBanner.css";

// props sont des donnée transmises à un composant React.
function HousingBanner(props) {
  // la variable pictures vaut props.pictures et sert à afficher les différentes images des appartements de façon dynamique
  const pictures = props.pictures;
  //  useState est un hook qui renvoi un tableau vide avec deux éléments (currentPicture et setCurrentPicture), setCurrentPicture sert à modifier la valeur du tableau
  const [currentPicture, setCurrentPicture] = useState(0);

  // la variable getClassName est une fonction qui sert à si i est strictement égal à currentPicture alors on renvoi show (on montre) sinon on retourne une string vide
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
