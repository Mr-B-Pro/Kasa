import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main.jsx";
import Banner from "./pages/home/Banner.jsx";
import ApartmentsGrid from "./pages/home/ApartmentsGrid.jsx";
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
