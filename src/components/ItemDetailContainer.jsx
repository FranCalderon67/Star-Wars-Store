import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { productos } from "./productos";
import "../App.css";

const getItem = () =>
  new Promise((resolve) => {
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
        async function fetchData() {
          const todosLosProductos = await getItem();
          const [resultado] = todosLosProductos.filter((elemento) => (id == elemento.id ? elemento : false));
          setProducto(resultado);
          setCargando(true);
        }
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return <>{cargando ? <ItemDetail item={producto} /> : <img className="sable" src={require("../imagenes/pagina/sable.png")} alt="ERROR"></img>}</>;
}

export default ItemDetailContainer;
