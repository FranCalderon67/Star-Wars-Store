import React, { useState } from "react";

function ItemCount({ stock, initial }) {
  const [contador, setContador] = useState(initial);

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
        <button type="button" className="btn btn-dark" onClick={restar}>
          -
        </button>

        <p style={{ color: "white" }}>{contador}</p>
        <button type="button" className="btn btn-dark" onClick={incrementar}>
          +
        </button>
      </div>
    </>
  );
}

export { ItemCount };
