import React from "react";
import { peliculas } from "./productos";

function ItemDetail() {
  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {peliculas[0].name}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className="portadaDetail" src={peliculas[0].imagen} alt="ERROR" />
            </div>
            <div>
              <p className="itemDetail">$ {peliculas[0].precio}</p>
            </div>
            <div>
              <p className="itemDetail">{peliculas[0].descripcion}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
