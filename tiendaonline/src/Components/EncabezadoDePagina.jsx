import React from "react";
import "./EncabezadoDePagina.css";
import {Link} from "react-router-dom";

export const EncabezadoDePagina = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="buscar_antojo d-flex align-items-left justify-content-left">
            <div className="col-11 d-flex justify-content-left">
              <div className="d-flex justify-content-left">
                <input className="my-0 mt-2 me-1 px-4"
                  type="Search"
                  name="Buscador"
                  placeholder="Buscar"
                />
                <button className="btn btn-secondary mt-2 px-3 py-2">
                  <img src="/src/assets/iconos/Lupa.png" width="30" />
                </button>
              </div>
            </div>
          </div>

          <div className="nav-logo-container">
            <Link to="/">
            <img className="nav-logo-img" 
              src="/src/assets/iconos/Logo.png" alt="Fast Food 5"/>
              </Link>
          </div>

          <ul className="nav nav-underline justify-content-end">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <img className="img-nav-list" src="/src/assets/iconos/Perfil.png"/>{" "}
                MI CUENTA
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link to="/inicioSesion">
                  <a className="dropdown-item" href="#">Iniciar Sesion</a>
                </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li>
                <Link to="/registro">
                  <a className="dropdown-item" href="#">Registrarme</a>              
                </Link>
              </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Carrito">
                <img className="img-nav-list" src="/src/assets/iconos/Carrito.png"/>
                CARRITO
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
