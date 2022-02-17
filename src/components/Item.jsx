import React from "react";
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
            <ItemCount stock={item.stock} initial={1} />
          </div>
          <p className="cardPelicula">$ {item.precio}</p>
          <button className="btn btn-primary">Agregar al Carrito</button>
        </div>

        {/* Button trigger modal */}
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Más Información
        </button>
      </div>
    </>
  );
};

export default Item;
