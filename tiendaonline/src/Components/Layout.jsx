import { Outlet } from "react-router-dom";
import { EncabezadoDePagina } from "./EncabezadoDePagina";
import { Menu } from "./Menu"
import { PieDePagina } from "./PieDePagina";

export const Layout = () => {
  return (
    <div className="container-xl d-flex flex-column min-vh-100 px-0 px-sm-0">
      <EncabezadoDePagina />
      <Menu />
      <Outlet />      
      <div className="mt-auto">
        <PieDePagina />
      </div>      
    </div>
  );
};
