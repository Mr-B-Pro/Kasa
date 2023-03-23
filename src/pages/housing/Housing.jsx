import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HousingBanner from "../../layout/housing-banner/HousingBanner.jsx";
import HousingData from "../../layout/housing-data/HousingData.jsx";
import HousingPanel from "../../layout/housing-panel/HousingPanel.jsx";
import "./Housing.css";

// PAGE HOUSING
function Housing() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);

  useEffect(fetchApartmentsData, []);

  function fetchApartmentsData() {
    fetch("data-base.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch(console.error);
  }
  if (flat == null) return <div>Loading...</div>;

  return (
    <main className="main__housing">
      selected flat : {JSON.stringify(flat)}
      <HousingBanner imageUrl={flat.cover} />
      <HousingData flat={flat} />
      <HousingPanel />
    </main>
  );
}

export default Housing;
