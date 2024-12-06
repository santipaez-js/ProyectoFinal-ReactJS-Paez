import React from "react";
import { useCart } from "../Context/CartContext";

import "./Navbar.css";


const Navbar = () => {
  const { carrito } = useCart();

  return (
    <header className="bg-danger text-white py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <button href="#" className="text-white text-decoration-none fs-1">Gaming Sense</button>

        
        <img src="../img/joystick-icon.webp" className="navbar-logo" alt="logo" />

        <button className="btn btn-light">
          🛒 Carrito ({carrito.length})
        </button>
      </div>
    </header>
  );

};

export default Navbar;
