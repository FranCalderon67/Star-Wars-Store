import React, { useState } from "react";
import "../App.css";
import BtnTerminarCompra from "./BtnTerminarCompra";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

function ItemDetail({ item }) {
  const [show, setShow] = useState(true);
  const [contador, setContador] = useState(0);
  const { addItem } = useCartContext();

  const incrementar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  function dobleFuncion() {
    setShow(false);
    addItem(item, contador);
  }

  return (
    <>
      <div className="flexDetail">
        <div>
          <h5 className="titulosDetail">{item.name}</h5>

          <img className="portadaDetail" src={item.imagen} alt="ERROR" />
        </div>
        <div>
          <p className="itemDetail">$ {item.precio}</p>
          <p className="itemDetail">{item.descripcion}</p>

          {show === true ? (
            <div>
              <div className="contador">
                <button type="button" className="btn btn-dark" onClick={restar}>
                  -
                </button>

                <p style={{ color: "white" }}>{contador}</p>
                <button type="button" className="btn btn-dark" onClick={incrementar}>
                  +
                </button>
              </div>

              <div className="btnFlex">
                <button className="btn btn-primary btnDetail" condition disabled={show ? "" : "disabled"} onClick={dobleFuncion}>
                  Agregar al Carrito
                </button>
                <Link to="/">
                  <button className="btn btn-danger btnDetail">Volver</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <BtnTerminarCompra />

              <Link to="/">
                <button className="btn btn-primary btnDetail btnDetail_terminar_compra">Continuar Comprando</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
