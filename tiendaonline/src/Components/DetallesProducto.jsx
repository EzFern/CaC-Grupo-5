import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../Utils/Database';

export const DetallesProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);  

  const sumarProducto = () => {
    setCantidad(cantidad + 1);
  };

  const restarProducto = () => {
    setCantidad(cantidad - 1);
  };

  const handleAgregarCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar el producto en la categoría específica (hamburguesas o pizzas)
    const categoria = id.startsWith('H') ? 'hamburguesas' : 'pizzas';
    const productoEnCatalogo = productos[categoria].find((prod) => prod.id === id);

    // Verificar que el productoEnCatalogo exista
    if (productoEnCatalogo) {
      const precioUnitarioConDescuento =
        productoEnCatalogo.descuento > 0
          ? (productoEnCatalogo.precio * (100 - productoEnCatalogo.descuento)) / 100
          : productoEnCatalogo.precio;

      const precioParcial = precioUnitarioConDescuento * cantidad;

      // Verificar si el producto ya está en el carrito
      const productoEnCarritoIndex = carritoActual.findIndex((item) => item.producto.id === id);

      // Actualizar la cantidad si el producto ya está en el carrito, de lo contrario, agregarlo
      if (productoEnCarritoIndex !== -1) {
        carritoActual[productoEnCarritoIndex].cantidad = cantidad;
        carritoActual[productoEnCarritoIndex].precio = precioUnitarioConDescuento;
        carritoActual[productoEnCarritoIndex].precioParcial = precioParcial;
      } else {
        carritoActual.push({
          producto: {
            id: productoEnCatalogo.id,
            titulo: productoEnCatalogo.titulo,
            categoria: categoria,
            img: productoEnCatalogo.img,
            descripcion: productoEnCatalogo.descripcion,
            combo: productoEnCatalogo.combo,
            ingredientes: productoEnCatalogo.ingredientes,
            precio: productoEnCatalogo.precio,
            descuento: productoEnCatalogo.descuento,
            stock: productoEnCatalogo.stock,
          },
          cantidad,
          precio: precioUnitarioConDescuento,
          precioParcial,
        });
      }

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(carritoActual));

      // Mostrar el Toast
      const toastElement = document.getElementById(`liveToast`);
      if (toastElement) {
        const toastBootstrap = new window.bootstrap.Toast(toastElement);
        toastBootstrap.show();
      }
    } else {
      console.error('Producto no encontrado en el catálogo:', id);
    }
  };

  useEffect(() => {
    // Buscar el producto en la categoría específica (hamburguesas o pizzas)
    const categoria = id.startsWith('H') ? 'hamburguesas' : 'pizzas';
    const encontrado = productos[categoria].find((prod) => prod.id === id);

    // Actualizar el estado del producto
    setProducto(encontrado);
  }, [id]);  

  // Si el producto aún no se ha encontrado, podrías mostrar un mensaje o redirigir a otra página
  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className='container d-flex justify-content-center'>
      {producto && (
        <div className="card mb-3 border-0" style={{width: '35vw'}}>
          <img
            src={producto.img}
            className="card-img-top"
            alt={producto.titulo}
            style={{ maxWidth: '100%', maxHeight: '55vh', margin: 'auto', display: 'block', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{producto.titulo}</h5>
            <p className="card-text text-center">{producto.combo !== '' ? `+ ${producto.combo}` : ''}</p>
            <p className="card-text text-center"><strong>Descripción: </strong>{producto.descripcion}</p>
            <p className="card-text text-center"><strong>Ingredientes: </strong>{producto.ingredientes}</p>
            {producto.descuento > 0 ? <p className="text-center text-success fs-5">-{producto.descuento}% OFF</p> : ''}
            <p className="card-text text-center fs-1 fw-bold text-danger">
              {producto.descuento > 0
                ? `$${(producto.precio - (producto.precio * producto.descuento) / 100) * cantidad}`
                : `$${producto.precio * cantidad}`}
            </p>
            <div className="card-body d-flex justify-content-center">
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
                  disabled={cantidad >= producto.stock ? true : false}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="btn btn-danger"              
                onClick={handleAgregarCarrito}
              >
                Agregar al carrito
              </button>
            </div>
          </div>

          {/* TOAST*/}
          <div className="toast-container position-fixed top-0 end-0">
            <div id={`liveToast`} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <strong className="me-auto">Carrito de compras</strong>
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
        </div>
      )}
    </div>
  );
};
