import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import ItemList from "./ItemList";
import { traerProductos } from "./productos";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    traerProductos
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <>
      {cargando ? (
        <img className="halcon" src={require("../imagenes/pagina/halcon.png")} alt="ERROR"></img>
      ) : (
        <section>
          <ItemList />
        </section>
      )}
    </>
  );
}

export default ItemListContainer;
