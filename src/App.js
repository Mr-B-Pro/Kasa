import React from "react";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Routing from "./routers/routing.jsx";
import "./app.css";

function app() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default app;
