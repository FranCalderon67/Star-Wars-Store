import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import ItemList from "./ItemList";
import db from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

  const getData = async () => {
    try {
      const itemCollection = collection(db, "productos");
      const col = await getDocs(itemCollection);
      const result = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
      setProductos(result);
      setCargando(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getDataCategoryQuery = async () => {
    try {
      const consulta = query(collection(db, "productos"), where("categoria", "==", categoria));
      const QuerySnapshot = await getDocs(consulta);

      setProductos(QuerySnapshot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() })));
      setCargando(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    categoria ? getDataCategoryQuery() : getData();
  });

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
