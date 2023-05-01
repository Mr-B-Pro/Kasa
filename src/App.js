// NOTRE APPLICATION

import React from "react";
// importation de notre composants header
import Header from "./components/header/Header.jsx";
// importation de notre composants footer
import Footer from "./components/footer/Footer.jsx";
// importation de notre fichier avec les différentes routes
import Routing from "./routers/Routing.jsx";
// imporation de notre app
import "./App.css";

function App() {
  return (
    <div>
      {/* section header */}
      <Header />
      {/* la route avec toutes les pages */}
      <Routing />
      {/* section footer */}
      <Footer />
    </div>
  );
}

export default App;
