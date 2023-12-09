import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./Components/Landing.jsx";
import { DetallesProducto } from "./Components/DetallesProducto.jsx";
import { Carrito } from "./Components/Carrito.jsx";
import { ResetCarrito } from "./Components/ResetCarrito.jsx";
import { Contacto } from "./Components/Contacto.jsx";
import { ComoComprar } from "./Components/ComoComprar.jsx";
import { PreguntasFrecuentes } from "./Components/PreguntasFrecuentes.jsx";
import { BasesYCondiciones } from "./Components/BasesYCondiciones.jsx";
import { AcercaDe } from "./Components/AcercaDe.jsx";
import { Layout } from "./Components/Layout.jsx";
import { Registro } from "./Components/Registro.jsx";
import { InicioSesion } from "./Components/InicioSesion.jsx";
import { productos } from "./Utils/Database";

// Agregar BASE_URL a imagenes de productos
const pathJoin = (paths, sep = "/") => paths.join(sep).replace(/\/{1,}/g, sep);
const addBaseURL2Products = () => {
  for (let [key, value] of Object.entries(productos)) {
    value.map( (e) => (e.img = e.img.startsWith(import.meta.env.BASE_URL)
      ? e.img : pathJoin([import.meta.env.BASE_URL, e.img])))}
};

function App() {
  addBaseURL2Products();

  return (
    <Router basename="/CaC-Grupo-5">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/detalles/:id" element={<DetallesProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/carrito/reset" element={<ResetCarrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/como-comprar" element={<ComoComprar />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />}/>
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/bases-y-condiciones" element={<BasesYCondiciones />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicioSesion" element={<InicioSesion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
