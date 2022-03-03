import React from "react";
import { Link } from "react-router-dom";

function BtnTerminarCompra({ show }) {
  return (
    <Link to="/carrito">
      <button className="btn btn-success btnDetail btnDetail_terminar_compra" onClick={show}>
        Terminar Compra
      </button>
    </Link>
  );
}

export default BtnTerminarCompra;
