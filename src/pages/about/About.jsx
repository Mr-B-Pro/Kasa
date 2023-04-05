import React from "react";
import AboutBanner from "../../layout/about-banner/AboutBanner.jsx";
import AboutPannel from "../../layout/about-panel/AboutPanel.jsx";
import "./About.css";

// PAGE ABOUT
function About() {
  return (
    <main className="main__about">
      <AboutBanner />
      <div className="about__pannel__description__container">
        <AboutPannel />
      </div>
    </main>
  );
}

export default About;
