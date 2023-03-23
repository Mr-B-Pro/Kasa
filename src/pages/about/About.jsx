import React from "react";
import AboutBanner from "../../layout/about-banner/AboutBanner.jsx";
import AboutPannelDescription from "../../components/description-panel/DescriptionPanel.jsx";
import "./About.css";

// PAGE ABOUT
function About() {
  return (
    <main className="main__about">
      <AboutBanner />
      <div className="about__pannel__description__container">
        <AboutPannelDescription />
        <AboutPannelDescription />
        <AboutPannelDescription />
        <AboutPannelDescription />
      </div>
    </main>
  );
}

export default About;
