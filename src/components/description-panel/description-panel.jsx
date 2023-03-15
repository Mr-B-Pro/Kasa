import React from "react";
import "./description-panel.css";

function descriptionPanel() {
  return (
    <div className="description__panel__container">
      <div className="description__panel__title__container">
        <h2 className="description__panel__title">Description</h2>
        <span className="description__panel__arrow">
          <i className="fas fa-chevron-up"></i>
        </span>
      </div>
      <div className="description__panel__text__container">
        <p className="description__panel__text">
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
          l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec
          5 lignes de métro et de nombreux bus. Logement parfait pour les
          voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de
          la gare de l'est (7 minutes à pied).
        </p>
      </div>
    </div>
  );
}

export default descriptionPanel;
