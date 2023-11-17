import './App.css'
import { ProductoDetalles } from './components/ProductoDetalles'
import { CombosImperdibles } from './components/CombosImperdibles'
import { Productos } from "./Utils/Productos"

function Landing() {

  return (
    <>
      {Productos.map(producto=><CombosImperdibles key={producto.id} categoria={producto.categoria} titulo={producto.titulo} img={producto.img} descripcion={producto.descripcion} combo={producto.combo} ingredientes={producto.ingredientes} precio={producto.precio} descuento={producto.descuento} stock={producto.stock} destacado={producto.destacado}/>)}
    </>
  )
}

export default Landing
