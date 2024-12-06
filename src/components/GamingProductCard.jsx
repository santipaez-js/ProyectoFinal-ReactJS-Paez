import React from "react";
import { useCart } from "../Context/CartContext";
import "./GamingProductCard.css";


const GamingProductCard = ({ producto }) => {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="col-12 col-md-4 text-center">
      <div className="text-dark contenedor">
        <h3>{producto.nombre}</h3>
        <h3>${producto.precio}</h3>
      </div>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="img-fluid mb-3"
      />
      <button
        className="btn btn-dark agregar-btn"
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default GamingProductCard;
