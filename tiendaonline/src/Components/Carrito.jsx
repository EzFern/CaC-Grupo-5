import React, { useEffect, useState } from 'react';

export const Carrito = () => {
  // Estado para almacenar los productos del carrito
  const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
    // Recuperar el carrito desde localStorage
    try {
      const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
      // Verificar que los datos recuperados son un array
      if (Array.isArray(carritoActual)) {
        setProductosCarrito(carritoActual);
      } else {
        console.error('Los datos recuperados del localStorage no son un array:', carritoActual);
      }
    } catch (error) {
      console.error('Error al parsear datos del localStorage:', error);
    }
  }, []); // Solo se ejecutará al montar el componente

  // Función para eliminar un producto del carrito
  const handleEliminarProducto = (index) => {
    // Obtener el carrito actual desde localStorage
    try {
      const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
      // Verificar que los datos recuperados son un array
      if (Array.isArray(carritoActual)) {
        // Eliminar el producto en la posición index
        carritoActual.splice(index, 1);
        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carritoActual));
        // Actualizar el estado local
        setProductosCarrito(carritoActual);
      } else {
        console.error('Los datos recuperados del localStorage no son un array:', carritoActual);
      }
    } catch (error) {
      console.error('Error al parsear datos del localStorage:', error);
    }
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {productosCarrito.map((item, index) => (
          <li key={index}>
            {item.producto && item.producto.titulo} - Cantidad: {item.cantidad} - Precio unitario: ${item.precio.toFixed(2)} - Precio parcial: ${item.precioParcial.toFixed(2)}
            <button onClick={() => handleEliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
