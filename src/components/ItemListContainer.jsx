import React from "react";
import "../App.css";

function ItemList(props) {
  return (
    <>
      <h1
        style={{
          color: "white",
          font: "70",
          textAlign: "center",
        }}
      >
        {props.title}
      </h1>
      <div className="flexPelicula">
        <div className="cardPelicula">
          <img
            className="portadaPelicula"
            src={require("../imagenes/peliculas/episodio1.jpg")}
            alt="ERROR"
          />
          <div>Precio $100</div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
