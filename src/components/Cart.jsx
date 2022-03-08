import React from "react";
import { useCartContext } from "./CartContext";
import { TiTrash } from "react-icons/ti";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems } = useCartContext();
  console.log("Item en Carrito=>", cartItems);
  const { eliminarItem } = useCartContext();
  const { vaciarCarrito } = useCartContext();
  const { totalCompra } = useCartContext();

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <h1 className="titulos">Carrito Vacio</h1>
          <Link to="/" className="regresarInicio">
            Vuelve a ver todos nuestros productos
          </Link>
        </>
      ) : (
        cartItems.map((i) => {
          return (
            <>
              <div className="flexCarrito">
                <img className="imgCarrito" src={i.imagen} alt="ERROR" />
                <p className="descripcionCarrito">
                  {i.name} x {i.cantidad} Total = $ {i.precio * i.cantidad}
                </p>
                <button className="btn btn-warning btnCarrito" onClick={() => eliminarItem(i.id, i.cantidad)}>
                  <TiTrash style={{ width: "35", height: "35" }} />
                </button>
              </div>
            </>
          );
        })
      )}

      {cartItems.length === 0 ? (
        ""
      ) : (
        <>
          <p className="titulos">Total $ {totalCompra()} </p>
          <button className="btn btn-danger btnVaciarCarrito" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </>
      )}
    </>
  );
}

export default Cart;
