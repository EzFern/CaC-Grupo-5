import { Outlet } from "react-router-dom";
import { EncabezadoDePagina } from "./EncabezadoDePagina";
import { Menu } from "./Menu"
import { PieDePagina } from "./PieDePagina";

export const Layout = () => {
  return (
    <div className="container-lg">
      <EncabezadoDePagina />
      <Menu />
      <Outlet />
      <PieDePagina />
    </div>
  );
};
