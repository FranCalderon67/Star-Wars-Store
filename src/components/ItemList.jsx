import React from "react";
import { ItemPeliculas, ItemRopa } from "./Item.jsx";

function ItemList() {
  return (
    <>
      <h1
        style={{
          color: "white",
          font: "70",
          textAlign: "center",
          margin: "1.5rem 0 1rem 0",
        }}
      >
        Películas
      </h1>
      <div className="flexContainer">
        <ItemPeliculas />
      </div>
      <h1
        style={{
          color: "white",
          font: "70",
          textAlign: "center",
          margin: "1.5rem 0 1rem 0",
        }}
      >
        Ropa
      </h1>
      <div className="flexContainer">
        <ItemRopa />
      </div>
    </>
  );
}

// const ItemList = () =>
//   peliculas.map(({ id, imagen, name, stock, precio }) => (
//     <div key={id} className="card " style={{ width: "18rem" }}>
//       <div>
//         <img className="card-img-top" src={imagen} alt="ERROR" />
//       </div>
//       <div className="card-body">
//         <h5 className="card-title cardPelicula">{name}</h5>
//         <div className="card-text">
//           <ItemCount stock={stock} initial={1} />
//         </div>
//         <p className="cardPelicula">$ {precio}</p>
//         <button className="btn btn-primary">Agregar al Carrito</button>
//       </div>
//     </div>
//   ));

// export default ItemList;

export default ItemList;
