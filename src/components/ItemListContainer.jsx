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
        <img className="portadaPelicula" src={require("../imagenes/episodio1.jpg")} alt="ERROR" />
        <img className="portadaPelicula" src={require("../imagenes/episodio2.jpg")} alt="ERROR" />
        <img className="portadaPelicula" src={require("../imagenes/episodio3.jpg")} alt="ERROR" />
      </div>
    </>
  );
}

export default ItemList;
