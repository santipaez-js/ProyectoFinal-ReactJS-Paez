import React from "react";
import { CartProvider } from "./Context/CartContext";
import Navbar from "./components/NavBar";
import GamingProductList from "./components/GamingProductList";
import GamingCart from "./components/GamingCart";
import "./styles/styles.css";

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <div className="container my-5">
        <GamingProductList />
        <GamingCart />
      </div>
    </CartProvider>
  );
};

export default App;
