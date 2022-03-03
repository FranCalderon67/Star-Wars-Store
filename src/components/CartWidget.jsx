import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartWidget = ({ cantidad }) => {
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
          <span>{cantidad}</span>
        </Link>
      </li>
    </>
  );
};

export default CartWidget;
