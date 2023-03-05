import React from "react";
import BannerHousing from "../../components/bannerHousing/BannerHousing.jsx";
import PersonalDataHousing from "../../components/personalDataHousing/PersonalDataHousing.jsx";
import CardsHousing from "../../components/cardsHousing/CardsHousing.jsx";
import "./Housing.css";

// PAGE HOUSING
function Housing() {
  return (
    <main className="main__housing">
      <BannerHousing />
      <PersonalDataHousing />
      <CardsHousing />
    </main>
  );
}

export default Housing;
