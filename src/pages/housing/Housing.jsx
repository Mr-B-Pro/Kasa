// PAGE HOUSING

// useState est un hook qui renvoi un tableau avec deux éléments
// useEffect est un hook qui prend deux arguments et permet de déclencher une fonction de manière asynchrone lorsque le composant est chargé
import React, { useEffect, useState } from "react";
// importation de useLocation qui est une fonction qui renvoie l'emplacement qui contient des informations sur l'URL. Chaque fois que l'URL change, un nouvel objet de localisation sera renvoyé
import { useLocation } from "react-router-dom";
// importation de layout HousingBanner
import HousingBanner from "../../layout/housing-banner/HousingBanner.jsx";
// imporation du layout HousingData
import HousingData from "../../layout/housing-data/HousingData.jsx";
// importation du layout HousingPanel
import HousingPanel from "../../layout/housing-panel/HousingPanel.jsx";
// imporation du css de la page de l'appartement
import "./Housing.css";

function Housing() {
  // useLocation est une fonction qui renvoie l'emplacement qui contient des informations sur l'URL. Chaque fois que l'URL change, un nouvel objet de localisation sera renvoyé
  const location = useLocation();
  // useState est un hook qui renvoi un tableau avec deux éléments (flat et setFlat), setFlat sert à modifier la valeur du tableau, il est de base sur null
  const [flat, setFlat] = useState(null);

  // useEffect est un hook qui prend deux arguments et permet de déclencher une fonction de manière asynchrone lorsque le composant est chargé
  useEffect(fetchApartmentsData);

  // fonction requete fetch pour récupérer les données
  function fetchApartmentsData() {
    // récupération des datas de Kasa dans le fichier data-base.json
    fetch("data-base.json")
      // promesse qui récupère les datas en string et renvoie la réponse au format json qui est un format que le navigateur comprend
      .then((res) => res.json())
      // promesse qui renvoie les valeurs des élément trouvés grâce aux id des appartements
      .then((flats) => {
        // la méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée,
        const flat = flats.find(
          // ici l'id doit etre strictement égal pour retrouver les donnés du bon appartement
          (flat) => flat.id === location.state.apartmentId
        );
        // setFlat sert à modifier la valeur du tableau
        setFlat(flat);
      })
      // console.error affiche un message d'erreur dans la console du navigateur en cas d'echec de la requete fetch
      .catch(console.error);
  }
  // si les données de l'appartement ne s'affichent pas tout de suite alors on renvoi un affichage qui indique Loading sur la page
  if (flat == null) return <div>Loading...</div>;

  return (
    <main className="main__housing">
      {/* layout du banner sur la page appartements et les données de l'appartement qu'on aura sélectionné */}
      <HousingBanner pictures={flat.pictures} />
      {/* layout du profil de l'utilisateur sur la page de l'appartement et les données de l'appartement qu'on aura sélectionné */}
      <HousingData flat={flat} />
      {/* layout des panels sur la page de l'appartement et les données de l'appartement qu'on aura séléctionné */}
      <HousingPanel flat={flat} />
    </main>
  );
}

export default Housing;
