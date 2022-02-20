import React from "react";
import Item from "./Item";
function ItemList({ ropa, figura, sable, nave, peliculas }) {
  return (
    <>
      <div className="flexContainer">
        {ropa &&
          ropa.map((r) => {
            return <Item item={r} />;
          })}
      </div>
      <div className="flexContainer">
        {figura &&
          figura.map((f) => {
            return <Item item={f} />;
          })}
      </div>
      <div className="flexContainer">
        {sable &&
          sable.map((s) => {
            return <Item item={s} />;
          })}
      </div>
      <div className="flexContainer">
        {nave &&
          nave.map((n) => {
            return <Item item={n} />;
          })}
      </div>

      <div className="flexContainer">
        {peliculas &&
          peliculas.map((p) => {
            return <Item item={p} id={p.id} />;
          })}
      </div>
    </>
  );
}

export default ItemList;
