import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Components/Landing.jsx';
import { DetallesProducto } from './Components/DetallesProducto.jsx';
import { Carrito } from './Components/Carrito.jsx';
import { ResetCarrito } from './Components/ResetCarrito.jsx';
import { Contacto } from './Components/Contacto.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detalles/:id" element={<DetallesProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/carrito/reset" element={<ResetCarrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
