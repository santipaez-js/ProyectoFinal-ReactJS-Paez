import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.nombre === producto.nombre);
    if (productoExistente) {
      setCarrito((prev) =>
        prev.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito((prev) => [...prev, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (nombre) => {
    setCarrito((prev) => prev.filter((item) => item.nombre !== nombre));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarProducto, vaciarCarrito, calcularTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

