// ROUTING SITE

import React from "react";
// importation de react router dom qui sert à gerer les différentes routes de notre site dans l'url
import { Routes, Route } from "react-router-dom";
// importation de notre page home
import Home from "../pages/home/Home.jsx";
// importation de notre page à propos
import About from "../pages/about/About.jsx";
// importation de notre page avec l'appartement séléctionné
import Housing from "../pages/housing/Housing.jsx";
// importation de notre page error 404
import Error404 from "../pages/error-404/Error404.jsx";

function Routing() {
  return (
    <Routes>
      {/* route de la page principale avec la racine / dans l'url */}
      <Route path="/" element={<Home />} />
      {/* route de la page à propos avec le mot /about dans url */}
      <Route path="about" element={<About />} />
      {/* route de la page d'un appartement qu'on aura sélectionné avec le mot /housing dans l'url */}
      <Route path="housing" element={<Housing />} />
      {/* route de la page d'erreur 404 avec le symbole * qui correspond à tous les autres mots dans l'url */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Routing;
