// INDEX DE L'APPLICATION

import React from "react";
// importation de ReactDom qui permet de “monter” notre application React sur un élément du DOM (ici un élément qui possède l’id “root”) :
import ReactDOM from "react-dom/client";
// importation reportWebVitals qui permet de mesurer et d'analyser les performances de notre application à l'aide de différentes métriques
import reportWebVitals from "./reportWebVitals";
// importation du fichier de notre application
import App from "./app";
// importation BrowserRouter qui permet de stocker l'emplacement dans la barre d'adresse du navigateur à l'aide d'URL
import { BrowserRouter } from "react-router-dom";

// notre application est injecté dans l'id root qui est dans la page index.html public
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // gere l'emplacement dans l'url
  <BrowserRouter>
    {/* notre app */}
    <App />
  </BrowserRouter>
);

reportWebVitals();
