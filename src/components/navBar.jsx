import React from "react";
import "../App.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navFlex">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="  nav-item">
                  <Link to="./productos/categoria/pelicula" className="nav-link active nav-color" aria-current="page">
                    Películas
                  </Link>
                </li>
                <li className="nav-color nav-item">
                  <Link to="./productos/categoria/nave" className="nav-link active" aria-current="page">
                    Naves
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn btn-dark dropdown-toggle nav-color nav-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Figuras y Sables
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <Link to="./productos/categoria/jedi" className="dropdown-item">
                          Jedi
                        </Link>
                      </li>
                      <li>
                        <Link to="./productos/categoria/sith" className="dropdown-item">
                          Lord Sith
                        </Link>
                      </li>
                      <li>
                        <Link to="./productos/categoria/legendario" className="dropdown-item">
                          Personajes Legendarios
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <p className="btn btn-dark dropdown-toggle nav-color nav-link nav-links" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Ropa
                    </p>

                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <Link to="./productos/categoria/remera" className="dropdown-item">
                          Remeras
                        </Link>
                      </li>
                      <li>
                        <Link to="./productos/categoria/buzo" className="dropdown-item">
                          Buzos
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <CartWidget />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
