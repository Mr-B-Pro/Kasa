import React from "react";
import HomeBanner from "../../layout/home-banner/HomeBanner.jsx";
import HomeGrid from "../../layout/home-grid/HomeGrid.jsx";
import "./Home.css";

// PAGE HOME
function Home() {
  return (
    <main className="main__home">
      <HomeBanner />
      <HomeGrid />
    </main>
  );
}

export default Home;
