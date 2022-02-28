import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />

      <Routes>
        <Route path="productos/categoria/:categoria/" element={<ItemListContainer />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
