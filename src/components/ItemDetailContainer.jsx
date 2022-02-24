import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { productos } from "./productos";
import "../App.css";

const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

function ItemDetailContainer() {
  const [producto, setProducto] = useState();
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    try {
      if (id) {
        getItem.then((res) => {
          let resultado = res.filter((elemento) => {
            let mostrarDetalle;
            if (id == elemento.id) {
              mostrarDetalle = elemento;
            }

            return mostrarDetalle;
          });
          console.log(resultado);
          setProducto(resultado);
          setCargando(true);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return <>{cargando ? <ItemDetail item={producto[0]} /> : <img className="sable" src={require("../imagenes/pagina/sable.png")} alt="ERROR"></img>}</>;
}

export default ItemDetailContainer;
