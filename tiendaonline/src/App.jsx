import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Components/Landing.jsx';
import { DetallesProducto } from './Components/DetallesProducto.jsx';
import { Carrito } from './Components/Carrito.jsx';
import { ResetCarrito } from './Components/ResetCarrito.jsx';
import { Contacto } from './Components/Contacto.jsx';
import {ComoComprar} from './Components/ComoComprar.jsx';
import { PreguntasFrecuentes } from './Components/PreguntasFrecuentes.jsx';
import { BasesYCondiciones } from './Components/BasesYCondiciones.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detalles/:id" element={<DetallesProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/carrito/reset" element={<ResetCarrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/bases-y-condiciones" element={<BasesYCondiciones />} />
      </Routes>
    </Router>
  );
}

export default App;
