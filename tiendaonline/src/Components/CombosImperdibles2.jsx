import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../Utils/Database';

export const CombosImperdibles2 = () => {
  const pizzas = productos.pizzas;
  const pizzasImperdibles = pizzas.filter((item) => item.imperdible);
  const [cantidades, setCantidades] = useState(Array(pizzasImperdibles.length).fill(1));
  const [pizzasImperdiblesAleatorias, setpizzasImperdiblesAleatorias] = useState(() =>
    pizzasImperdibles.sort(() => Math.random() - 0.5).slice(0, 4)
  ); 

  const showToast = () => {
    const toastLiveExample = document.getElementById('liveToast');
    if (toastLiveExample) {
      const toastBootstrap = new window.bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();
    }
  };

  const guardarEnLocalStorage = (index, cantidad) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoEnCarritoIndex = carritoActual.findIndex((item) => item.id === pizzasImperdiblesAleatorias[index].id);
    const precioUnitarioConDescuento =
      pizzasImperdiblesAleatorias[index].descuento > 0
        ? (pizzasImperdiblesAleatorias[index].precio * (100 - pizzasImperdiblesAleatorias[index].descuento)) / 100
        : pizzasImperdiblesAleatorias[index].precio;
    const precioParcial = precioUnitarioConDescuento * cantidad;

    if (productoEnCarritoIndex !== -1) {
      carritoActual[productoEnCarritoIndex].cantidad = cantidad;
      carritoActual[productoEnCarritoIndex].precio = precioUnitarioConDescuento;
      carritoActual[productoEnCarritoIndex].precioParcial = precioParcial;
    } else {
      carritoActual.push({
        id: pizzasImperdiblesAleatorias[index].id,
        producto: pizzasImperdiblesAleatorias[index],
        cantidad,
        precio: precioUnitarioConDescuento,
        precioParcial,
      });
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  };

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
    showToast();
    guardarEnLocalStorage(index, cantidades[index]);
  };

  return (
    <>
      <h2 className="text-center mt-2 mb-4">COMBOS <strong className="text-danger">IMPERDIBLES</strong></h2>
      <div className="container">
        <div className="row g-4">
          {pizzasImperdiblesAleatorias.map((producto, index) => (
            <div key={producto.id} className="col">
              <Link to={`/detalles/${producto.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={producto.img} className="card-img-top" alt={producto.titulo} style={{ objectFit: 'cover', height: '200px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <h5 className="card-title text-center">{producto.titulo}</h5>
              </Link>
              <div className="card-body mb-5">
                <p className="card-text text-center">{producto.combo !== "" ? `+ ${producto.combo}` : ""}</p>
                {producto.descuento > 0 ? (
                  <p className="text-success fw-bold text-center">-{producto.descuento}% OFF</p>
                ) : (
                  ""
                )}
                <p className="card-text text-center fw-bold text-warning fs-2">
                  {producto.descuento > 0
                    ? `$${(producto.precio - (producto.precio * producto.descuento) / 100) * cantidades[index]}`
                    : `$${producto.precio * cantidades[index]}`}
                </p>
                <div className="card-body d-flex justify-content-center">
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
            </div>
          ))}
        </div>
      </div>

    {/* TOAST */}    
    <div className="toast-container position-fixed top-0 end-0">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Carrito</strong>
            <small>Tienda Grupo 5</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body text-center">            
            El pedido fue agregado a tu carrito!
            <br />
            <a href="/carrito"><button className="btn btn-primary btn-sm mt-1">Ir al carrito</button></a>
          </div>
        </div>
      </div>
    {/* FIN TOAST */}
    </>
  );
};