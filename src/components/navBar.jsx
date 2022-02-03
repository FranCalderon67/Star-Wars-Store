import React from "react";
import "../App.css";
import { BiCart } from "react-icons/bi";

function navBar() {
  return (
    <>
      <header>
        <div className="gridHead">
          <a className="logo" href="#">
            <img
              className="animate__animated animate__flip"
              src={require("../imagenes/logo.png")}
              alt="ERROR"
            ></img>
          </a>
        </div>
      </header>

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
                  <a className="nav-link active nav-color" aria-current="page" href="#">
                    Películas
                  </a>
                </li>
                <li className="nav-color nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Naves
                  </a>
                </li>

                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle nav-color nav-link"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Figuras
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          Jedi
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Lord Sith
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Personajes Legendarios
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle nav-color nav-link"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Ropa
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          Remeras
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Busos
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle nav-color nav-link"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sables
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          Jedi
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Lord Sith
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="  nav-item">
                  <a className="nav-link active nav-color" aria-current="page" href="#">
                    <BiCart
                      style={{
                        width: "65",
                        height: "40",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default navBar;
