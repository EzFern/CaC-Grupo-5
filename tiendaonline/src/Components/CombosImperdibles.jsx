import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../Utils/Database';

export const CombosImperdibles = ({categoriaSolicitada}) => {
  const categoria = productos[categoriaSolicitada];

  const productosImperdibles = categoria.filter((item) => item.imperdible);
  const [cantidades, setCantidades] = useState(Array(productosImperdibles.length).fill(1));
  const [productosImperdiblesAleatorios, setproductosImperdiblesAleatorios] = useState(() =>
    productosImperdibles.sort(() => Math.random() - 0.5).slice(0, 4)
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
    const productoEnCarritoIndex = carritoActual.findIndex((item) => item.id === productosImperdiblesAleatorios[index].id);
    const precioUnitarioConDescuento =
    productosImperdiblesAleatorios[index].descuento > 0
        ? (productosImperdiblesAleatorios[index].precio * (100 - productosImperdiblesAleatorios[index].descuento)) / 100
        : productosImperdiblesAleatorios[index].precio;
    const precioParcial = precioUnitarioConDescuento * cantidad;

    if (productoEnCarritoIndex !== -1) {
      carritoActual[productoEnCarritoIndex].cantidad = cantidad;
      carritoActual[productoEnCarritoIndex].precio = precioUnitarioConDescuento;
      carritoActual[productoEnCarritoIndex].precioParcial = precioParcial;
    } else {
      carritoActual.push({
        id: productosImperdiblesAleatorios[index].id,
        producto: productosImperdiblesAleatorios[index],
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
      <h2 className="text-center mt-2 mb-2">COMBOS <strong className="text-danger">IMPERDIBLES</strong></h2>
      <div className="container-fluid bg-primary ">
        <div className="row">
          {productosImperdiblesAleatorios.map((producto, index) => (
            <div key={producto.id} className="col-md-6 col-lg-3 mt-3 mb-4 py-2">
              <div className="overflow-hidden" style={{ minHeight: '420px', borderRadius: '10px', boxShadow: '0px 1px 2px rgba(0,0,0,0.3)' }}>
              <Link to={`/detalles/${producto.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={producto.img} className="card-img-top" alt={producto.titulo} style={{ objectFit: 'cover', height: '200px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }} />
                <h6 className="card-title fs-4 text-center text-nowrap text-break pt-1 mx-1 px-1 ">{producto.titulo}</h6>
              </Link>
              <div className="card-body mb-3">
                <p className="card-text text-center text-nowrap my-0 py-0">{producto.combo !== "" ? `+ ${producto.combo}` : ""}</p>
                {producto.descuento > 0 ? (
                  <p className="text-success fw-bold text-center my-0 py-0">-{producto.descuento}% OFF</p>
                ) : (
                  ""
                )}
                <p className="card-text text-center fw-bold text-warning fs-2 my-1 py-0">
                  {producto.descuento > 0
                    ? `$${(producto.precio - (producto.precio * producto.descuento) / 100) * cantidades[index]}`
                    : `$${producto.precio * cantidades[index]}`}
                </p>
                <div className="card-body d-flex justify-content-center ">
                  <div className="btn-group me-1 mx-1 px-0" role="group" aria-label="btnGroup">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mx-0 px-2"
                      onClick={() => restarProducto(index)}
                      disabled={cantidades[index] === 1 ? true : false}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-light btn-sm mx-0 px-1" disabled>
                      {cantidades[index]}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mx-0 px-s"
                      onClick={() => sumarProducto(index)}
                      disabled={cantidades[index] >= producto.stock ? true : false}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger text-center text-nowrap mx-0"
                    id={`liveToastBtn${index}`}
                    onClick={() => handleAgregarCarrito(index)}
                  >
                    Agregar al carrito
                  </button>
                </div>
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
            <Link to="/carrito"><button className="btn btn-primary btn-sm mt-1">Ir al carrito</button></Link>
          </div>
        </div>
      </div>
    {/* FIN TOAST */}
    </>
  );
};