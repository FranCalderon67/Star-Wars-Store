import React from "react";
import "../App.css";
import ItemCount from "./ItemCount";
function ItemDetail({ item }) {
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
          <ItemCount stock={item.stock} initial={0} />
          <div className="btnFlex">
            <button className="btn btn-primary btnDetail">Agregar al Carrito</button>
            <button className="btn btn-success btnDetail">Volver</button>
          </div>
        </div>
      </div>
    </>
  );
}

// function ItemDetail({ item }) {
//   return (
//     <>
//       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 {item.name}
//               </h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <img className="portadaDetail" src={item.imagen} alt="ERROR" />
//             </div>
//             <div>
//               <p className="itemDetail">$ {item.precio}</p>
//             </div>
//             <div>
//               <p className="itemDetail">{item.descripcion}</p>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
//                 Cerrar
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Agregar al Carrito
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default ItemDetail;
