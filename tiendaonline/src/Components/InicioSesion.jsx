import React from "react";

export const InicioSesion = () => {
  return (
    <div className="container text-center">
      <div className="registro-container">
        <h2>Iniciar Sesión</h2>
        <form className="registro-form">
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
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
