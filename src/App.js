import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Routing from "./routers/Routing.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
