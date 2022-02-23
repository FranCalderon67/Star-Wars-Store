import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  return (
    <>
      <div key={item.id} className="card" style={{ width: "18rem" }}>
        <div>
          <img className="card-img-top" src={item.imagen} alt="ERROR" />
        </div>
        <div className="card-body">
          <h5 className="card-title cardPelicula">{item.name}</h5>
          <div className="card-text">
            <ItemCount stock={item.stock} initial={0} />
          </div>
          <p className="cardPelicula">$ {item.precio}</p>
          <button className="btn btn-primary">Agregar al Carrito</button>
        </div>

        <Link to={`/productos/${item.id}`} type="button" className="btn btn-success">
          Más Información
        </Link>
      </div>
    </>
  );
};

export default Item;
