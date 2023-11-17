import React, { useState, useEffect } from 'react';
import { productos } from "../Utils/Database";

export const CombosImperdibles = () => {
  const hamburguesas = productos.hamburguesas;
  // Filtrar productos imperdibles
  const hamburguesasImperdibles = hamburguesas.filter((item) => item.imperdible);

  // Estado para las cantidades
  const [cantidades, setCantidades] = useState(Array(hamburguesasImperdibles.length).fill(1));

  // Estado para las hamburguesas aleatorias
  const [hamburguesasImperdiblesAleatorias, setHamburguesasImperdiblesAleatorias] = useState(() =>
    hamburguesasImperdibles.sort(() => Math.random() - 0.5).slice(0, 4)
  );

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
    // Implementa la lógica del toast aquí
    const toastTrigger = document.getElementById(`liveToastBtn${index}`);
    const toastLiveExample = document.getElementById(`liveToast${index}`);

    if (toastTrigger && toastLiveExample) {
      const toastBootstrap = new window.bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();
    }

    // Guardar las cantidades en localStorage solo al agregar al carrito
    const nuevaCantidades = [...cantidades];
    guardarEnLocalStorage(index, nuevaCantidades[index]);
  };

  const guardarEnLocalStorage = (index, cantidad) => {
    // Obtener el carrito actual desde localStorage (si existe)
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Verificar si el producto ya está en el carrito
    const productoEnCarritoIndex = carritoActual.findIndex((item) => item.id === hamburguesasImperdiblesAleatorias[index].id);
  
    // Obtener el precio del producto (con descuento aplicado)
    const precioUnitarioConDescuento =
      hamburguesasImperdiblesAleatorias[index].descuento > 0
        ? (hamburguesasImperdiblesAleatorias[index].precio * (100 - hamburguesasImperdiblesAleatorias[index].descuento)) / 100
        : hamburguesasImperdiblesAleatorias[index].precio;
  
    // Calcular el precio total
    const precioParcial = precioUnitarioConDescuento * cantidad;
  
    // Actualizar la cantidad si el producto ya está en el carrito, de lo contrario, agregarlo
    if (productoEnCarritoIndex !== -1) {
      carritoActual[productoEnCarritoIndex].cantidad = cantidad;
      carritoActual[productoEnCarritoIndex].precio = precioUnitarioConDescuento; // Actualizar el precio unitario
      carritoActual[productoEnCarritoIndex].precioParcial = precioParcial; // Actualizar el precio total
    } else {
      // Agregar más información sobre el producto al carrito, incluyendo el precio y el precio total
      carritoActual.push({
        id: hamburguesasImperdiblesAleatorias[index].id,
        producto: hamburguesasImperdiblesAleatorias[index], // Agregar el objeto completo del producto
        cantidad,
        precio: precioUnitarioConDescuento,
        precioParcial,
      });
    }
  
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  };
    

  return (
    <>
      <div className="container">
        <div className="row g-4">
          {hamburguesasImperdiblesAleatorias.map((producto, index) => (
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

              {/* TOAST*/}
              <div className="toast-container position-fixed bottom-0 p-3">
                <div
                  id={`liveToast${index}`}
                  className={`toast`}
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
              </div>
              {/* FIN TOAST */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
