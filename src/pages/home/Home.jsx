// PAGE HOME

import React from "react";
// importation du layout HomeBanner
import HomeBanner from "../../layout/home-banner/HomeBanner.jsx";
// importation du layout HomgeGrid
import HomeGrid from "../../layout/home-grid/HomeGrid.jsx";
// importation du css de la page d'accueil
import "./Home.css";

function Home() {
  return (
    <main className="main__home">
      {/* layout du banner de la page d'accueil */}
      <HomeBanner />
      {/* layout de la grille des appartements de la page d'accueil */}
      <HomeGrid />
    </main>
  );
}

export default Home;
