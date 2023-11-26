import "./Landing.css"
import { EncabezadoDePagina } from "./EncabezadoDePagina"
import { Menu } from "./Menu"
import { Carrousel } from "./Carrousel"
import { Categorias } from "./Categorias"
import { CardsCategorias } from "./CardsCategorias"
import { CombosImperdibles } from './CombosImperdibles'
//import { CombosImperdibles2 } from './CombosImperdibles2'
import { RecibirOfertas } from './RecibirOfertas'
import { SeguinosEn } from './SeguinosEn'
import { PieDePagina } from './PieDePagina'

import { Carrito } from "./Carrito"
import { ResetCarrito } from "./ResetCarrito"

export const Landing = () => {

  return (
    <>      
      <EncabezadoDePagina/>
      <Menu/>
      <Carrousel />
      <CardsCategorias/>
      <CombosImperdibles categoriaSolicitada="hamburguesas" />
      <Carrousel/>
      <CardsCategorias/>
      <CombosImperdibles categoriaSolicitada="pizzas" />
      <RecibirOfertas />
      <SeguinosEn />
      <PieDePagina />
    </>
  )
}
