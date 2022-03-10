import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../services/firebase";
import "../App.css";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();

  const getElegido = async () => {
    try {
      const document = doc(db, "productos", id);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      setProducto(result);
      setCargando(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getElegido();
  }, [id]);

  return <>{cargando ? <ItemDetail item={producto} /> : <img className="sable" src={require("../imagenes/pagina/sable.png")} alt="ERROR"></img>}</>;
}

export default ItemDetailContainer;
