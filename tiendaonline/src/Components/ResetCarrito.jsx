import React from 'react';

export const ResetCarrito = () => {
  const handleResetLocalStorage = () => {
    // Limpiar localStorage
    localStorage.removeItem('carrito');
    // Puedes agregar más líneas de limpieza según sea necesario
  };

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={handleResetLocalStorage}
    >
      Reiniciar Carrito
    </button>
  );
};