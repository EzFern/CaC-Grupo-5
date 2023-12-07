import React from "react";
import "./EncabezadoDePagina.css";
import {Link} from "react-router-dom";

export const EncabezadoDePagina = () => {
  return (
    <>
      <header>
        <nav className="navbar ps-4 pe-4">

          <div className="buscar_antojo col-12 col-sm-7 col-md-3 col-lg-3 d-flex align-items-left  justify-content-left m-auto">
            <div class="input-group mx-3">
              <input className="form-control mt-0 pl-1"
                type="Search"
                name="Buscador"
                placeholder="Buscar"
                />
              <button className="btn btn-outline-secondary">
                <img src="/assets/iconos/Lupa.png" width="30" />
              </button>
            </div>
          </div>

          <div className="nav-logo-container m-auto text-center col-md-5 col-lg-4">
            <Link to="/">
            <img className="nav-logo-img" 
              src="/assets/iconos/Logo.png" alt="Fast Food 5"/>
              </Link>
          </div>

          <ul className="nav nav-underline justify-content-enXd justify-content-center text-center col-12 col-sm-12 col-md-4 col-lg-3 ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <img className="img-nav-list" src="/assets/iconos/Perfil.png"/>{" "}
                <div>
                  MI CUENTA
                </div>
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
                <img className="img-nav-list" src="/assets/iconos/Carrito.png"/>
                <div>
                  CARRITO
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
