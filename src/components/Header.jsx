import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="gridHead">
        <Link to="/" className="logo">
          <img className="animate__animated animate__flip" src={require("../imagenes/pagina/logo.png")} alt="ERROR"></img>
        </Link>
      </div>
    </header>
  );
}

export default Header;
