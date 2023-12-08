import React, { useState } from "react";
import "./RecibirOfertas.css";

import icoFlecha from "/assets/iconos/Flecha.png"


export const RecibirOfertas = () => {
  const [msgToast, setMsgToast] = useState("");
  const [email, setEmail] = useState("");

  const suscribir = async (e) => {
    let testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{1,})[ ]*$/i;
    e.preventDefault();
    if (testEmail.test(email)) {
      // TODO: ...acá iria la suscripcion
      setMsgToast("Suscripto exitosamente!");
      document.getElementById("recibir-ofertas-form").reset();
    } else {
      setMsgToast("Formato de mail no válido");
    }
    showToast();
  };

  const showToast = (mensaje) => {
    const toastLiveExample = document.getElementById("liveToastRO");
    if (toastLiveExample) {
      const toastBootstrap = new window.bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();
    }
  };

  return (
    <>
      <div className="recibir_ofertas d-flex align-items-center justify-content-center">
        <div className="col-11 d-flex justify-content-center">
          <div className="col col-sm-10 col-md-10 col-lg-8 col-xl-7">
            <h3 className="my-0 text-center">¡Recibí nuestras ofertas!</h3>
            <form
              id="recibir-ofertas-form"
              className="d-flex justify-content-center"
              onSubmit={suscribir}
            >
              <input
                className="my-0 mt-2 me-1 px-4"
                type="email"
                name=""
                id=""
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-secondary mt-2 px-3 py-2">
                <img src={icoFlecha} width="25" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className="toast-container position-fixed top-0 end-0">
        <div
          className="toast"
          id="liveToastRO"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Recibir Ofertas</strong>
            <small>Tienda Grupo 5</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{msgToast}</div>
        </div>
      </div>
      {/* ---toast */}
    </>
  );
};
