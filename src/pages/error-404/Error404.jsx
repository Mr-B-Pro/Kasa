import React from "react";
import { NavLink } from "react-router-dom";
import "./Error404.css";

// PAGE ERROR
function Error404() {
  return (
    <main className="main__error404">
      <section className="section__error404">
        <h1 className="h1__error404">404</h1>
        <h2 className="h2__error404">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <h2 className="h2__error404__smartphone">
          Oups! La page que <br /> vous demandez n'existe pas.
        </h2>

        <NavLink to="/">
          <div className="return__home__error404">
            Retourner sur la page d'accueil
          </div>
        </NavLink>
      </section>
    </main>
  );
}

export default Error404;
