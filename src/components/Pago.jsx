import React from "react";
import { useCartContext } from "./CartContext";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import "../App.css";
import db from "../services/firebase";
import swal from "sweetalert";

function FormularioCompra() {
  const { cartItems } = useCartContext();

  const sendOrder = async (e) => {
    e.preventDefault();
    let order;
    if (e.target[0].value === "") {
      swal("Cuidado!", "Debes completar todos los campos", "error");
    } else {
      order = {
        comprador: {
          name: e.target[0].value,
          mail: e.target[1].value,
          telefono: e.target[2].value,
          domicilio: e.target[3].value,
          fecha: Timestamp.fromDate(new Date()),
        },
        items: cartItems,
        total: cartItems.reduce((acum, item) => acum + item.precio * item.cantidad, 0),
      };
      swal("Felicitaciones", "Tu compra ha sido registrada", "success");
    }

    const orderCollection = collection(db, "orders");

    try {
      const newDoc = await addDoc(orderCollection, order);
      console.log(newDoc);
    } catch (error) {
      console.log("error=>", error);
    }
  };

  return (
    <>
      <form className="forms" onSubmit={sendOrder}>
        <input className="innerForm" placeholder="Nombre y Apellido" type="text" />
        <br />
        <input className="innerForm" placeholder="Mail" type="mail" />
        <br />
        <input className="innerForm" placeholder="Número de Teléfono" type="number" />
        <br />
        <input className="innerForm" placeholder="Domicilio" type="text" />
        <button className="btn btn-success btnPagar" type="submit">
          Pagar
        </button>
      </form>
    </>
  );
}

export default FormularioCompra;
