import React from "react";
import { useCartContext } from "./CartContext";
import { collection, Timestamp, addDoc } from "firebase/firestore";

import { Link } from "react-router-dom";
import "../App.css";
import db from "../services/firebase";
import swal from "sweetalert";

function FormularioCompra() {
  const { cartItems } = useCartContext();
  const { vaciarCarrito } = useCartContext();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    let order;
    if (e.target[0].value === "" || e.target[2].value === "" || e.target[3].value === "") {
      swal("Cuidado!", "Debes completar todos los campos", "error");
    } else if (validateEmail(e.target[1].value) === null) {
      swal("Cuidado!", "Direccion de mail incorrecta", "error");
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
    }

    const orderCollection = collection(db, "orders");
    try {
      const newDoc = await addDoc(orderCollection, order);

      swal("Felicitaciones", `Tu orden es la ${newDoc.id}`, "success");
      vaciarCarrito();
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
        <Link to="/">
          <button className="btn btn-warning btnPagar" type="reset">
            Volver
          </button>
        </Link>
      </form>
    </>
  );
}

export default FormularioCompra;
