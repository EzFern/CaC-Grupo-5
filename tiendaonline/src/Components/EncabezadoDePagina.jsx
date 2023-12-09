import React from "react";
import "./EncabezadoDePagina.css";
import {Link} from "react-router-dom";

import icoLupa from "/assets/iconos/Lupa.png"
import icoUsuario from "/assets/iconos/Perfil.png"
import icoCarrito from "/assets/iconos/Carrito.png"
import logoUrl from "/assets/iconos/Logo.png";

export const EncabezadoDePagina = () => {
  return (
    <>
      <header>
        <nav className="navbar ps-4 pe-4">

          <div className="buscar_antojo col-12 col-sm-7 col-md-3 col-lg-3 d-flex align-items-left  justify-content-left m-auto">
            <div className="input-group mx-3">
              <input className="form-control mt-0 pl-1"
                type="Search"
                name="Buscador"
                placeholder="Buscar"
                />
              <button className="btn btn-outline-secondary">
                <img src={icoLupa} width="30" />
              </button>
            </div>
          </div>

          <div className="nav-logo-container m-auto text-center col-md-5 col-lg-4">
            <Link to="/">
            <img className="nav-logo-img" 
              src={logoUrl} alt="Fast Food 5"/>
              </Link>
          </div>

          <ul className="nav justify-content-enXd justify-content-center text-center col-12 col-sm-12 col-md-4 col-lg-3 ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <img className="img-nav-list" src={icoUsuario}/>{" "}
                <div>
                  MI CUENTA
                </div>
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link to="/inicioSesion" className="dropdown-item">
                  Iniciar Sesion
                </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li>
                <Link to="/registro" className="dropdown-item">
                  Registrarme              
                </Link>
              </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Carrito">
                <img className="img-nav-list" src={icoCarrito}/>
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
