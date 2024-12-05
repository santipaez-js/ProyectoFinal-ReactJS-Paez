import React from 'react';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Gaming Sense</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#productos">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    );
  };

export default NavBar;