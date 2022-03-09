import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

const CartWidget = ({ cantidad }) => {
  const { cartCount } = useCartContext();

  if (cartCount === 0) {
    return "";
  } else {
    return (
      <>
        <li className="  nav-item">
          <Link to="/carrito" className="nav-link active nav-color" aria-current="page" href="#">
            <BiCart
              style={{
                width: "65",
                height: "40",
              }}
            />
            <span>
              <button className="numeroCarrito">{cantidad}</button>
            </span>
          </Link>
        </li>
      </>
    );
  }
};

export default CartWidget;
