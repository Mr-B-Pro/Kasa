import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Banner from "./components/Banner.jsx";
import ApartmentsGrid from "./components/ApartmentsGrid.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Banner />
        <ApartmentsGrid />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
