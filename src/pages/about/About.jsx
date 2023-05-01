// PAGE ABOUT

import React from "react";
// importation du layout AboutBanner
import AboutBanner from "../../layout/about-banner/AboutBanner.jsx";
// importation du layout AboutPanel
import AboutPannel from "../../layout/about-panel/AboutPanel.jsx";
// importation du css de la page A propos
import "./About.css";

function About() {
  return (
    <main className="main__about">
      {/* layout du banner de la page à propos */}
      <AboutBanner />
      {/* layout des pannels de la page à propos  */}
      <AboutPannel />
    </main>
  );
}

export default About;
