import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import ItemList from "./ItemList";
import { traerPeliculas, traerFigura, traerNave, traerRopa, traerSable } from "./productos";

function ItemListContainer() {
  const [figura, setFigura] = useState([]);
  const [nave, setNave] = useState([]);
  const [ropa, setRopa] = useState([]);
  const [sable, setSable] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    traerFigura
      .then((res) => {
        setFigura(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    traerNave
      .then((res) => {
        setNave(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    traerRopa
      .then((res) => {
        setRopa(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    traerSable
      .then((res) => {
        setSable(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    traerPeliculas
      .then((res) => {
        setPeliculas(res);
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
          <h1 className="titulos">Películas</h1>
          <ItemList peliculas={peliculas} />
          <h1 className="titulos">Figuras de Acción</h1>
          <ItemList figura={figura} />
          <h1 className="titulos">Naves</h1>
          <ItemList nave={nave} />
          <h1 className="titulos">Ropa</h1>
          <ItemList ropa={ropa} />
          <h1 className="titulos">Sables</h1>
          <ItemList sable={sable} />
        </section>
      )}
    </>
  );
}

export default ItemListContainer;
