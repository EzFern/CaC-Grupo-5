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
              <input className="col-12 mx-1" type="email" name="" id="" placeholder="Email" />
              <input className="col-2" type="submit" value=">" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
