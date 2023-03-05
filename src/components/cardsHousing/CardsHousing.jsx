import React from 'react'
import "./CardsHousing.css"

// SECTION 3 CARDS CARROUSSEL MAIN HOUSING
function CardsHousing() {
  return (
      // container carroussel description and equipements
      <section className="section__cardsHousing">
        {/* container carroussel description */}
        <div className="cardsHousing__container__description">
          <div className="cardsHousing__container__description__title">
            <h2 className="cardsHousing__description__title">
              Description
            </h2>
            <span className="cardsHousing__description__title__arrow">
            <i className="fas fa-chevron-up"></i>
          </span>
          </div>
          <div className="cardsHousing__container__description__text">
            <p className="cardsHousing__description__text">
              Vous serez à 50m du canal Saint-martin où vous pourrez
              pique-niquer l'été et à côté de nombreux bars et restaurants. Au
              cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement
              parfait pour les voyageurs en solo et les voyageurs d'affaires.
              Vous êtes à1 station de la gare de l'est (7 minutes à pied).
            </p>
          </div>
        </div>

        {/* container carroussel equipements */}
        <div className="cardsHousing__container__equipements">
          <div className="cardsHousing__container__equipements__title">
            <h2 className="cardsHousing__equipements__title">
              Équipements
            </h2>
            <span className="cardsHousing__equipements__title__arrow">
            <i className="fas fa-chevron-up"></i>
          </span>
          </div>
          <div className="cardsHousing__container__equipements__text">
            <p className="cardsHousing__equipements__text">
              Climatisation <br />
              Wi-Fi <br />
              Cuisine <br />
              Espace de travail <br />
              Fer à repasser <br />
              Sèche-cheveux Cintres
            </p>
          </div>
        </div>
      </section>
  )
}

export default CardsHousing