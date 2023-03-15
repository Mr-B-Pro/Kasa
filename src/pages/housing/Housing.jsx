import React from "react";
import HousingBanner from "../../layout/housing-banner/housing-banner.jsx";
import HousingData from "../../layout/housing-data/housing-data.jsx";
import HousingPanel from "../../layout/housing-panel/housing-panel.jsx";
import "./housing.css";

// PAGE HOUSING
function housing() {
  return (
    <main className="main__housing">
      <HousingBanner />
      <HousingData />
      <HousingPanel />
    </main>
  );
}

export default housing;
