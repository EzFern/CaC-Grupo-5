import { Outlet } from "react-router-dom";
import { EncabezadoDePagina } from "./EncabezadoDePagina";
import { Menu } from "./Menu"
import { PieDePagina } from "./PieDePagina";

export const Layout = () => {
  return (
    <div className="container-lg d-flex flex-column min-vh-100">
      <EncabezadoDePagina />
      <Menu />
      <Outlet />      
      <div className="mt-auto">
        <PieDePagina />
      </div>      
    </div>
  );
};
