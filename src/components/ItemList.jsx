import React from "react";
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div className="flexContainer">
      {productos &&
        productos.map((p) => {
          return <Item item={p} />;
        })}
    </div>
  );
}

export default ItemList;
