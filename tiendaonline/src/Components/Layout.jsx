import { Outlet } from "react-router-dom";
import { EncabezadoDePagina } from "./EncabezadoDePagina";
import { PieDePagina } from "./PieDePagina";

export const Layout = () => {
  return (
    <div className="container">
      <EncabezadoDePagina />
      <Outlet />
      <PieDePagina />
    </div>
  );
};
