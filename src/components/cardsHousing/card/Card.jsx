import React from 'react'
import "./Card.css"

function Card() {
  return (
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
  )
}

export default Card