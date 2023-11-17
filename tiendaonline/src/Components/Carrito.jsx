import React, { useEffect, useState } from 'react';

export const Carrito = () => {
  // Estado para almacenar los productos del carrito
  const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
    // Recuperar el carrito desde localStorage
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductosCarrito(carritoActual);
  }, []); // Solo se ejecutará al montar el componente

  // Función para eliminar un producto del carrito
  const handleEliminarProducto = (index) => {
    // Obtener el carrito actual desde localStorage
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];

    // Eliminar el producto en la posición index
    carritoActual.splice(index, 1);

    // Actualizar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActual));

    // Actualizar el estado local
    setProductosCarrito(carritoActual);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {productosCarrito.map((item, index) => (
          <li key={index}>
            {item.producto.titulo} - Cantidad: {item.cantidad}
            <button onClick={() => handleEliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
