import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductoDetalles } from './components/ProductoDetalles'
import { ProductosGrid } from './components/ProductosGrid'
import { Productos } from "./Utils/Productos"

function App() {

  return (
    <>
      {Productos.map(producto=><ProductosGrid key={producto.id} categoria={producto.categoria} titulo={producto.titulo} img={producto.img} descripcion={producto.descripcion} combo={producto.combo} ingredientes={producto.ingredientes} precio={producto.precio} descuento={producto.descuento} stock={producto.stock} destacado={producto.destacado}/>)}
    </>
  )
}

export default App
