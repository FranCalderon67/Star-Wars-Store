import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { peliculas } from "./productos";
import "../App.css";

const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(peliculas);
  }, 2000);
});

function ItemDetailContainer() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    getItem
      .then((res) => {
        setPeliculas(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(true);
      });
  }, []);

  return <>{cargando ? <ItemDetail item={peliculas[0]} /> : <img className="sable" src={require("../imagenes/pagina/sable.png")} alt="ERROR"></img>}</>;
}

export default ItemDetailContainer;
