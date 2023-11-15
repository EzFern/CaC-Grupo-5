import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DetallesProducto } from './components/DetallesProducto'
import { Productos } from "./Utils/Productos"

function App() {  

  return (
    <>
      {Productos.map(producto=><DetallesProducto key={producto.id} title={producto.title} img={producto.img} description={producto.description} price={producto.price} sku={producto.sku} stock={producto.stock} />)}
    </>
  )
}

export default App
