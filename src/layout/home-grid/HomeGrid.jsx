import React, { useEffect, useState } from "react";
import ApartmentCard from "../../components/apartment-card/ApartmentCard.jsx";
import "./HomeGrid.css";

function HomeGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("data-base.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    <section className="home__grid__container">
      {apartments.map((apartment, apartmentKey) => (
        <ApartmentCard
          key={apartmentKey}
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </section>
  );
}

export default HomeGrid;
