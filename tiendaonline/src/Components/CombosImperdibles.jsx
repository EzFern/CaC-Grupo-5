import React, { useState } from 'react';

export const CombosImperdibles = ({ id, categoria, titulo, img, descripcion, combo, precio, descuento, stock, destacado }) => {
  const [cantidad, setCantidad] = useState(1)

  const sumarProducto = () => {
    setCantidad(cantidad + 1)
  }

  const restarProducto = () => {
    setCantidad(cantidad - 1)
  }

  /* TOAST BOTON CARRITO */
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
  /* FIN TOAST BOTON CARRITO */

  return (
    <>
      {/*CARDS GRID*/}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/*forEach o map x 5*/}
        <div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt={titulo} />
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{combo != "" ? `+ ${combo}` : ""}</p>
              <p className="card-text">Descripción: {descripcion}</p>
              {descuento > 0 ? <span className="badge bg-light text-success fs-5">-{descuento}% OFF</span> : ""}
              <p className="card-text fs-1 fw-bold text-danger">{descuento > 0 ? `$${(precio - (precio * descuento / 100)) * cantidad}` : `$${precio * cantidad}`}</p>
              <div class="btn-group me-2" role="group" aria-label="btnGroup">
                <button type="button" className="btn btn-secondary" onClick={restarProducto} disabled={cantidad == 1 ? true : false}>-</button>
                <button type="button" className="btn btn-light" disabled>{cantidad}</button>
                <button type="button" className="btn btn-secondary" onClick={sumarProducto} disabled={cantidad >= stock ? true : false}>+</button>
              </div>
              <button type="button" className="btn btn-danger" id="liveToastBtn">Agregar al carrito</button>
            </div>
          </div>
          {/* TOAST*/}
          <div className="toast-container position-fixed bottom-0 p-3">
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                {/* <img src="..." className="rounded me-2" alt="..."/> */}
                <strong className="me-auto">Carrito de compras</strong>
                <small>Tienda Grupo 5</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body">
                Agregaste {cantidad} {titulo} a tu carrito de compras!
              </div>
            </div>
          </div>
          {/* FIN TOAST */}
        </div>
        {/*end forEach o map x 5*/}
      </div>
    </>
  );
}