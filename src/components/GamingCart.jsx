import React from "react";
import { useCart } from "../Context/CartContext";
import "./GamingCart.css";

const GamingCart = () => {
  const { carrito, eliminarProducto, vaciarCarrito, calcularTotal } = useCart();

  return (
    <section className="mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-danger text-white d-flex justify-content-between align-items-center">
          <h2 className="mb-0">🛒 Carrito de Compras</h2>
          <button className="btn btn-sm btn-light" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </div>
        <div className="card-body">
          {carrito.length === 0 ? (
            <p className="text-muted">El carrito está vacío.</p>
          ) : (
            carrito.map((producto) => (
              <div
                key={producto.nombre}
                className="d-flex justify-content-between align-items-center border-bottom p-2"
              >
                <p>
                  {producto.nombre} - ${producto.precio} x {producto.cantidad}
                </p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarProducto(producto.nombre)}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
          <div className="text-end">
            <h4>Total: ${calcularTotal()}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingCart;
