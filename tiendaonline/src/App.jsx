import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DetallesProducto } from './components/DetallesProducto'
import { Productos } from "./Utils/Productos"

function App() {  

  return (
    <>
      {Productos.map(producto=><DetallesProducto key={producto.id} titulo={producto.titulo} img={producto.img} descripcion={producto.descripcion} ingredientes={producto.ingredientes} precio={producto.precio} stock={producto.stock} destacado={producto.destacado}/>)}
    </>
  )
}

export default App
