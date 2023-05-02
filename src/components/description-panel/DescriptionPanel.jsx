// COMPENENT DESCRIPTION PANEL

// importation de useState qui est un hook qui permet de gerer l'état des composants basé sur une fonction
import React, { useState } from "react";
// importation du css du panel de la page à propos
import "./AboutAccordion.css";
// importation du css du panel de la page appartement
import "./HousingAccordion.css";

// props sont des donnée transmises à un composant React.
function DescriptionPanel(props) {
  // useState est un hook qui renvoi un tableau avec deux éléments (isActive et setIsActive), setIsActive sert à modifier la valeur du tableau, il est de base sur false, au clique il sera sur true
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      // window location permet de connaitre les éléments de l'URL, si l'url est sur la page about alors on séléctionne la classe about-accordion sinon on affiche housing-accordion
      className={
        window.location.pathname === "/about"
          ? "about-accordion"
          : "housing-accordion"
      }
    >
      <div
        // window location permet de connaitre les éléments de l'URL, si l'url est sur la page about alors on séléctionne la classe about-accordion-item sinon on affiche housing-accordion-item
        className={
          window.location.pathname === "/about"
            ? "about-accordion-item"
            : "housing-accordion-item"
        }
      >
        <div
          // window location permet de connaitre les éléments de l'URL, si l'url est sur la page about alors on séléctionne la classe about-accordion-title pour sinon on affiche housing-accordion-title
          className={
            window.location.pathname === "/about"
              ? "about-accordion-title"
              : "housing-accordion-title"
          }
          // au clique de la souris on active le panel
          onClick={() => setIsActive(!isActive)}
        >
          {/* props.title sert à afficher le nom contenu du panel de façon dynamique  */}
          <p>{props.title}</p>

          <i
            // si la classe est active alors on affiche fa-chevron-down sinon on séléctionne la classe fa-chevron-up avec les données des appartements
            className={isActive ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          ></i>
        </div>
        {/* si c'est activé alors on affiche le contenu  */}
        {isActive && (
          <div
            className={
              // window location permet de connaitre les éléments de l'URL, si l'url est sur la page about alors on séléctionne la classe about-accordion-content sinon on affiche housing-accordion-content
              window.location.pathname === "/about"
                ? "about-accordion-content"
                : "housing-accordion-content"
            }
          >
            {/*  props.content sert à afficher les différents contenu des panels de façon dynamique */}
            {props.content}
          </div>
        )}
      </div>
    </div>
  );
}

export default DescriptionPanel;
