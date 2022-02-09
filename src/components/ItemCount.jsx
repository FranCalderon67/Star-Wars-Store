import React, { useState } from "react";

function Contador({ stock, initial }) {
  const [contador, setContador] = useState(0);
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
  return (
    <>
      <div className="contador">
        <button type="button" className="btn btn-dark" onClick={incrementar}>
          +
        </button>
        <p style={{ color: "white" }}>{contador}</p>
        <button type="button" className="btn btn-dark" onClick={restar}>
          -
        </button>
      </div>
    </>
  );
}

export default Contador;
