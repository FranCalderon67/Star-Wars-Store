import React from "react";
import "../App.css";

function Header() {
  return (
    <header>
      <div className="gridHead">
        <a className="logo" href="#">
          <img
            className="animate__animated animate__flip"
            src={require("../imagenes/pagina/logo.png")}
            alt="ERROR"
          ></img>
        </a>
      </div>
    </header>
  );
}

export default Header;
