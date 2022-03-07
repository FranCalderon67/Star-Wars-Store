import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItem = (item, cantidad) => {
    if (cartItems.some((producto) => producto.id == item.id)) {
      const copy = [...cartItems];
      const itemRepetido = cartItems.findIndex((producto) => producto.id == item.id);
      copy[itemRepetido] = { ...copy[itemRepetido], cantidad: copy[itemRepetido].cantidad + cantidad };

      setCartItems(copy);
      setCartCount((prev) => prev + cantidad);
    } else {
      setCartItems([...cartItems, { ...item, cantidad }]);
      setCartCount((prev) => prev + cantidad);
    }
  };

  const precioTotal = () => {
    return (
      <>
        <p>{}</p>
      </>
    );
  };

  const vaciarCarrito = () => {
    setCartItems([]);
    setCartCount(0);
  };

  const eliminarItem = (id, cantidad) => {
    const carritoNuevo = cartItems.filter((e) => e.id !== id);
    setCartItems(carritoNuevo);
    const nuevaCantidad = cartItems.filter((c) => c.cantidad !== cantidad);

    if (nuevaCantidad == 0) {
      setCartCount(() => cantidad - cartCount);
    } else {
      setCartCount(() => cantidad - nuevaCantidad);
    }

    if (cantidad == cartCount) {
      console.log("Cantidad es igual CartCount");
    }
  };

  return <CartContext.Provider value={{ cartItems, cartCount, addItem, eliminarItem, vaciarCarrito, precioTotal }}>{children}</CartContext.Provider>;
}

export { CartContext };
export { useCartContext };
export { CartProvider };
