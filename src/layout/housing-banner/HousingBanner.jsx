// LAYOUT HOUSING BANNER

// importation de useState qui est un hook qui permet de gerer l'état des composants basé sur une fonction
import React, { useState } from "react";
// importation du css du layout HousingBanner
import "./HousingBanner.css";

// props sont des donnée transmises à un composant React.
function HousingBanner(props) {
  // la variable pictures vaut props.pictures et sert à afficher les différentes images des appartements de façon dynamique
  const pictures = props.pictures;
  //  useState est un hook qui renvoi un tableau avec deux éléments (currentPicture et setCurrentPicture), setCurrentPicture sert à modifier la valeur du tableau
  const [currentPicture, setCurrentPicture] = useState(0);

  // la fonction getClassName est une fonction qui sert à si l'index est strictement égal à currentPicture alors on renvoi la classe show (on montre) sinon on retourne une string vide. Si i (index) est égal a la premiere image du tableau alors on la montre sinon on la montre pas
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  // la fonction moveToRight sert à déplacer la photo vers la droite dans le carrousel avec le + 1 de currentPicture, ça veut dire qu'on se déplace dans le tableau d'un élément
  const moveToRight = () => {
    // le modulot % sert à ne jamais dépasser le reste d'une division, la propriété length définit ou renvoie le nombre d'éléments dans le tableau
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // la fonction moveToLeft sert sert à déplacer la photo vers la gauche dans le carrousel avec le - 1 de currentPicture, ça veut dire qu'on se déplace dans le tableau d'un élément
  const moveToLeft = () => {
    // au début currentPicture sera à zero et on le passe à - 1
    const newCurrentPicture = currentPicture - 1;
    // si newCurrentPicture est inferieur à 0 alors on invoque setCurrentPicture qui va faire -1 dans le tableau des images
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    // sinon on fait un currentPicture -1
    setCurrentPicture(currentPicture - 1);
  };

  return (
    <section className="banner__housing__section">
      {/* au clique sur la fleche gauche on invoque la fonction moveToLeft pour déplacer le carrousel vers la gauche */}
      <span onClick={moveToLeft} className="banner__housing__arrowLeft">
        <i className="fas fa-chevron-left"></i>
      </span>

      <span className="banner__housing__slideCounter">
        {/* on rajoute + 1 à currentPicture de 1 à 5 et on met avec la props la photo qui correspond dans le tableau
        la propriété length définit ou renvoie le nombre d'éléments dans le tableau  */}
        {currentPicture + 1} / {pictures.length}
      </span>

      {/* au clique sur la fleche droite on invoque la fonction moveToRight pour déplacer le carrousel vers la droite */}
      <span onClick={moveToRight} className="banner__housing__arrowRight">
        <i className="fas fa-chevron-right"></i>
      </span>
      {/* la méthode map permet d'itérer sur les données et de retourner un tableau avec tous les éléments */}
      {pictures.map((pic, i) => (
        <img
          // invocatio de la fonction getClassName qui sert à montrer l'image qui est séléctionné avec la class show
          className={getClassName(i)}
          key={pic}
          // // pic sert à afficher les différents photos des appartements de façon dynamique
          src={pic}
          alt="Représente l'intérieur d'un appartement."
        ></img>
      ))}
    </section>
  );
}

export default HousingBanner;
