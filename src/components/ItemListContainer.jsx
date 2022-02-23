import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import ItemList from "./ItemList";
import { traerProductos } from "./productos";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    try {
      if (categoria) {
        traerProductos.then((res) => {
          let resultado = res.filter((elemento) => {
            let mostrarProducto = "";
            if (elemento.categoria === categoria) {
              mostrarProducto = elemento;
            }
            return mostrarProducto;
          });

          setProductos(resultado);
          setCargando(false);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [categoria]);
  // traerProductos.then((res) => {
  //   setProductos(res);
  //   setCargando(false);
  // });
  return (
    <>
      {cargando ? (
        <img className="halcon" src={require("../imagenes/pagina/halcon.png")} alt="ERROR"></img>
      ) : (
        <section>
          <ItemList productos={productos} />
        </section>
      )}
    </>
  );
}

export default ItemListContainer;
