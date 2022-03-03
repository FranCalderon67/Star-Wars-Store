import React from "react";
import { useCartContext } from "./CartContext";

function Cart() {
  const { cartItems } = useCartContext();
  const { eliminarItem } = useCartContext();
  const { vaciarCarrito } = useCartContext();
  return (
    <>
      {cartItems.length === 0 ? (
        <h1 className="titulos">Carrito Vacio</h1>
      ) : (
        cartItems.map((i) => {
          return (
            <>
              <div className="flexCarrito">
                <img className="imgCarrito" src={i.imagen} alt="ERROR" />
                <p className="descripcionCarrito">
                  {i.name} x {i.cantidad} Total = $ {i.precio * i.cantidad}
                </p>
                <button className="btn btn-warning btnCarrito" onClick={eliminarItem}>
                  Eliminar
                </button>
              </div>
            </>
          );
        })
      )}
      {cartItems.length === 0 ? (
        ""
      ) : (
        <button className="btn btn-danger btnVaciarCarrito" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      )}
    </>
  );
}

export default Cart;
