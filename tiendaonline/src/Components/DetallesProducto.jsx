import React, { useState, useRef, useEffect } from 'react';

export const DetallesProducto = ({ id, categoria, titulo, img, descripcion, combo, ingredientes, precio, descuento, stock }) => {
  const [cantidad, setCantidad] = useState(1);
  const toastTriggerRef = useRef(null);
  const toastRef = useRef(null);

  const sumarProducto = () => {
    setCantidad(cantidad + 1);
  };

  const restarProducto = () => {
    setCantidad(cantidad - 1);
  };

  const handleAgregarCarrito = () => {
    // Obtener el carrito actual desde localStorage (si existe)
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el producto al carrito con su cantidad
    carritoActual.push({
      producto: {
        id,
        titulo,
        categoria,
        img,
        descripcion,
        combo,
        ingredientes,
        precio,
        descuento,
        stock,
      },
      cantidad,
    });

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActual));

    // Mostrar el Toast
    const toastBootstrap = new bootstrap.Toast(toastRef.current);
    toastBootstrap.show();
  };

  useEffect(() => {
    // Obtener el elemento del botón y del Toast
    toastTriggerRef.current = document.getElementById(`liveToastBtn-${id}`);
    toastRef.current = document.getElementById(`liveToast-${id}`);
  }, [id]);

  return (
    <>
      <div className="card mb-3 border-0">
        <img
          src={img}
          className="card-img-top"
          alt={titulo}
          style={{ maxWidth: '50%', margin: 'auto', display: 'block', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{combo !== "" ? `+ ${combo}` : ""}</p>
          <p className="card-text">Descripción: {descripcion}</p>
          <p className="card-text">Ingredientes: {ingredientes}</p>
          {descuento > 0 ? <span className="badge bg-light text-success fs-5">-{descuento}% OFF</span> : ""}
          <p className="card-text fs-1 fw-bold text-danger">
            {descuento > 0
              ? `$${(precio - (precio * descuento) / 100) * cantidad}`
              : `$${precio * cantidad}`}
          </p>
          <div className="btn-group me-2" role="group" aria-label="btnGroup">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={restarProducto}
              disabled={cantidad === 1 ? true : false}
            >
              -
            </button>
            <button type="button" className="btn btn-light" disabled>
              {cantidad}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={sumarProducto}
              disabled={cantidad >= stock ? true : false}
            >
              +
            </button>
          </div>
          <button
          type="button"
          className="btn btn-danger"
          id={`liveToastBtn-${id}`}
          onClick={handleAgregarCarrito}
        >
          Agregar al carrito
        </button>
        </div>
      
        <div className="toast-container position-fixed bottom-0 p-3">
          <div id={`liveToast-${id}`} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <strong className="me-auto">Carrito de compras</strong>
              <small>Tienda Grupo 5</small>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
              Agregaste {cantidad} {titulo} a tu carrito de compras!
            </div>
          </div>
        </div>
      </div>      
    </>
  );
};
