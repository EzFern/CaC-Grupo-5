import "./Landing.css"
import { DetallesProducto } from './DetallesProducto'
import { CombosImperdibles } from './CombosImperdibles'

import { Productos } from "../Utils/Productos"
import { Carrito } from "./Carrito"

function Landing() {

  return (
    <>
      <Carrito />  
      <DetallesProducto key={Productos[0].id} categoria={Productos[0].categoria} titulo={Productos[0].titulo} img={Productos[0].img} descripcion={Productos[0].descripcion} combo={Productos[0].combo} ingredientes={Productos[0].ingredientes} precio={Productos[0].precio} descuento={Productos[0].descuento} stock={Productos[0].stock} destacado={Productos[0].destacado}/>
      <CombosImperdibles Productos={Productos}/>
    </>
  )
}

export default Landing
