import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Housing from "../pages/housing/Housing.jsx";
import Error404 from "../pages/error-404/Error404.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="housing" element={<Housing />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Routing;
