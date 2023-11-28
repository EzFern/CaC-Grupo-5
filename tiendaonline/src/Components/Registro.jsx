import React from "react";
import "./Registro.css";

export const Registro = () => {
  return (
    <div className="container text-center">
      <div className="registro-container">
        <h2>Registro</h2>
        <form className="registro-form">
          <label>
            Nombre:
            <input type="text" name="nombre" className="col-md-12" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" className="col-md-12"/>
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" name="contraseña" className="col-md-12"/>
          </label>
          <br />
          <button className="btn btn-danger col-md-12" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};
