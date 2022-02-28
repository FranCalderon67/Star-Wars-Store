import React from "react";
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  return (
    <>
      <li className="  nav-item">
        <a className="nav-link active nav-color" aria-current="page" href="#">
          <BiCart
            style={{
              width: "65",
              height: "40",
            }}
          />
          <span style={{ color: "white" }}>4</span>
        </a>
      </li>
    </>
  );
};

export default CartWidget;
