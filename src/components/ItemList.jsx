import React from "react";
import Item from "./Item";
function ItemList({ ropa, figura, sable, nave, peliculas }) {
  return (
    <>
      <div className="flexContainer">
        {ropa &&
          ropa.map((p) => {
            return <Item item={p} />;
          })}
      </div>
      <div className="flexContainer">
        {figura &&
          figura.map((p) => {
            return <Item item={p} />;
          })}
      </div>
      <div className="flexContainer">
        {sable &&
          sable.map((p) => {
            return <Item item={p} />;
          })}
      </div>
      <div className="flexContainer">
        {nave &&
          nave.map((p) => {
            return <Item item={p} />;
          })}
      </div>

      <div className="flexContainer">
        {peliculas &&
          peliculas.map((p) => {
            return <Item item={p} />;
          })}
      </div>
    </>
  );
}

export default ItemList;
