import "./Landing.css"
import { EncabezadoDePagina } from "./EncabezadoDePagina"
import { Menu } from "./Menu"
import { Carrousel } from "./Carrousel"
import { Categorias } from "./Categorias"
import { DetallesProducto } from './DetallesProducto'
import { CombosImperdibles } from './CombosImperdibles'
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
      <Categorias/>
      <CombosImperdibles/>
      <Carrousel/>
      <Categorias/>
      <CombosImperdibles/>
      <RecibirOfertas />
      <SeguinosEn />
      <PieDePagina />
    </>
  )
}
