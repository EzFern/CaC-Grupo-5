import React from "react";
import "./RecibirOfertas.css";

export const RecibirOfertas = () => {
  return (
    <div>
      <div class="recibir_ofertas d-flex align-items-center justify-content-center">
        <div className="col-10 d-flex justify-content-center">
          <div className="">
            <h1>¡Recibi nuestras ofertas!</h1>
            {/* <p className="text-center">formulario.</p> */}
            <div className="d-flex  justify-content-center">
              <input
                className="col-12 mt-2 mx-1 px-4"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              {/* <input className="col-2" type="submit" value=">" /> */}
              <button class="btn mt-2 px-3 py-2">
                <img src="/src/assets/iconos/Flecha.png" width="25" /> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
