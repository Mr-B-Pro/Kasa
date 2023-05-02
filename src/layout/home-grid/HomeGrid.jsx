// LAYOUT HOME GRID

// importation de useEffect qui est un hook qui permet d'effectuer notre effet une fois le rendu du composant terminé
// importation de useState qui est un hook qui permet de gerer l'état des composants basé sur une fonction
import React, { useEffect, useState } from "react";
// importation du composant apartmentCard
import ApartmentCard from "../../components/apartment-card/ApartmentCard.jsx";
// importation du css de HomeGrid
import "./HomeGrid.css";

function HomeGrid() {
  // useState est un hook qui renvoi un tableau avec deux éléments (apartments et setApartments), setApartments sert à modifier la valeur du tableau
  const [apartments, setApartments] = useState([]);

  // useEffect est un hook qui prend deux arguments et permet de déclencher une fonction de manière asynchrone lorsque le composant est chargé
  useEffect(fetchApartments, []);

  // fonction requete fetch pour récupérer les données
  function fetchApartments() {
    // récupération des datas de Kasa dans le fichier data-base.json
    fetch("data-base.json")
      // promesse qui récupère les datas en string et renvoie la réponse au format json qui est un format que le navigateur comprend
      .then((res) => res.json())
      // promesse qui renvoie la réponse des données des appartements
      .then((res) => setApartments(res))
      // console.error affiche un message d'erreur dans la console du navigateur en cas d'echec de la requete fetch
      .catch(console.error);
  }
  return (
    <section className="home__grid__container">
      {/* la méthode map permet d'itérer sur les données et de retourner un tableau avec tous les éléments */}
      {apartments.map((apartment, apartmentKey) => (
        // Composant d'une carte d'appartement et ses données
        <ApartmentCard
          // apartmentKey permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants dans le DOM, la key aide React à identifier quels éléments ont été ajoutés ou supprimés
          key={apartmentKey}
          // apartment.title sert à afficher les différents noms des appartements de façon dynamique
          title={apartment.title}
          // apartment.cover sert à afficher les différentes images des appartements de façon dynamique
          imageUrl={apartment.cover}
          // apartment.id sert à récupérer les différents id des appartements de façon dynamique
          id={apartment.id}
        />
      ))}
    </section>
  );
}

export default HomeGrid;
