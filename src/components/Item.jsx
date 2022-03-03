import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ item }) => {
  return (
    <>
      <div key={item.id} className="card" style={{ width: "18rem" }}>
        <div>
          <img className="card-img-top" src={item.imagen} alt="ERROR" />
        </div>
        <div className="card-body">
          <h5 className="card-title cardPelicula">{item.name}</h5>

          <p className="cardPelicula">$ {item.precio}</p>
        </div>

        <Link to={`/productos/${item.id}`} type="button" className="btn btn-success">
          Más Información
        </Link>
      </div>
    </>
  );
};

export default Item;
