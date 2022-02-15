import React from "react";
import "../App.css";
import { peliculas } from "./productos";
import { ropa } from "./productos";
import ItemCount from "./ItemCount";

const ItemPeliculas = () =>
  peliculas.map(({ id, imagen, name, stock, precio }) => (
    <div key={id} className="card" style={{ width: "18rem" }}>
      <div>
        <img className="card-img-top" src={imagen} alt="ERROR" />
      </div>
      <div className="card-body">
        <h5 className="card-title cardPelicula">{name}</h5>
        <div className="card-text">
          <ItemCount stock={stock} initial={1} />
        </div>
        <p className="cardPelicula">$ {precio}</p>
        <button className="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
  ));

const ItemRopa = () =>
  ropa.map(({ id, imagen, name, stock, precio }) => (
    <div key={id} className="card " style={{ width: "18rem" }}>
      <div>
        <img className="card-img-top" src={imagen} alt="ERROR" />
      </div>
      <div className="card-body">
        <h5 className="card-title cardPelicula">{name}</h5>
        <div className="card-text">
          <ItemCount stock={stock} initial={1} />
        </div>
        <p className="cardPelicula">$ {precio}</p>
        <button className="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
  ));

export { ItemPeliculas };
export { ItemRopa };
