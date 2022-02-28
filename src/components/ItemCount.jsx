import React, { useState } from "react";
import BtnTerminarCompra from "./BtnTerminarCompra";

function ItemCount({ stock, initial }) {
  const [contador, setContador] = useState(initial);
  const [show, setShow] = useState(false);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="contador">
        <button type="button" className="btn btn-dark" onClick={restar} disabled={show ? "disabled" : ""}>
          -
        </button>
        <p style={{ color: "white" }}>{contador}</p>
        <button type="button" className="btn btn-dark" onClick={incrementar} disabled={show ? "disabled" : ""}>
          +
        </button>
      </div>

      <div className="btnFlex">
        <button className="btn btn-primary btnDetail" onClick={handleShow} disabled={show ? "disabled" : ""}>
          Agregar al Carrito
        </button>
        <button className="btn btn-danger btnDetail">Volver</button>
        <div>{show && <BtnTerminarCompra show={handleShow} />}</div>
      </div>
    </>
  );
}

export default ItemCount;
