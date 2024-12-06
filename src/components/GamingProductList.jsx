import React, { useEffect, useState } from "react";
import GamingProductCard from "./GamingProductCard";
import "./GamingProductList.css";


const GamingProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch("./data/productos.json");
        const data = await respuesta.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };
    cargarProductos();
  }, []);

  return (
    <main>
      {productos.map((categoria) => (
        <section key={categoria.categoria} className="mb-5">
          <h2 className="text-dark contenedor">{categoria.categoria}:</h2>
          <div className="row">
            {categoria.productos.map((producto) => (
              <GamingProductCard key={producto.nombre} producto={producto} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default GamingProductList;
