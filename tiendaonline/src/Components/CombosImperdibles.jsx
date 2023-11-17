import React, { useState, useEffect } from 'react';

export const CombosImperdibles = ({ Productos }) => {
  const [cantidades, setCantidades] = useState(Array(Productos.length).fill(1));
  const [showToasts, setShowToasts] = useState(Array(Productos.length).fill(false));

  const sumarProducto = (index) => {
    const nuevaCantidades = [...cantidades];
    nuevaCantidades[index] += 1;
    setCantidades(nuevaCantidades);
  };

  const restarProducto = (index) => {
    const nuevaCantidades = [...cantidades];
    nuevaCantidades[index] = Math.max(1, nuevaCantidades[index] - 1);
    setCantidades(nuevaCantidades);
  };

  const handleAgregarCarrito = (index) => {
    setShowToasts((prevToasts) => {
      const newToasts = [...prevToasts];
      newToasts[index] = true;
      return newToasts;
    });

    setTimeout(() => {
      setShowToasts((prevToasts) => {
        const newToasts = [...prevToasts];
        newToasts[index] = false;
        return newToasts;
      });
    }, 3000); // Ocultar el Toast después de 3 segundos (puedes ajustar esto según tus necesidades)
  };

  return (
    <>      
      <div className="container">
        <div className="row g-4">
          {Productos.map((producto, index) => (
            <div key={producto.id} className="col">
              <img src={producto.img} className="card-img-top" alt={producto.titulo} />
              <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">{producto.combo !== "" ? `+ ${producto.combo}` : ""}</p>
                {producto.descuento > 0 ? (
                  <span className="badge bg-light text-success">-{producto.descuento}% OFF</span>
                ) : (
                  ""
                )}
                <p className="card-text fw-bold text-warning fs-3">
                  {producto.descuento > 0
                    ? `$${(producto.precio - (producto.precio * producto.descuento) / 100) * cantidades[index]}`
                    : `$${producto.precio * cantidades[index]}`}
                </p>
                <div className="btn-group me-2" role="group" aria-label="btnGroup">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => restarProducto(index)}
                    disabled={cantidades[index] === 1 ? true : false}
                  >
                    -
                  </button>
                  <button type="button" className="btn btn-light" disabled>
                    {cantidades[index]}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => sumarProducto(index)}
                    disabled={cantidades[index] >= producto.stock ? true : false}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  id={`liveToastBtn${index}`}
                  onClick={() => handleAgregarCarrito(index)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>        
      </div>

      {/* TOASTs */}
      <div className="toast-container position-fixed bottom-0 p-3">
        {Productos.map((producto, index) => (
          <div
            key={producto.id}
            className={`toast ${showToasts[index] ? 'show' : ''}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Carrito de compras</strong>
              <small>Tienda Grupo 5</small>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">{`Agregaste ${cantidades[index]} ${producto.titulo} al carrito!`}</div>
          </div>
        ))}
      </div>
      {/* FIN TOASTs */}
    </>
  );
};
