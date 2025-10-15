import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Blogs } from './pages/Blogs'; 
import { Categorias } from './pages/Categorias';
import { Nosotros } from './pages/Nosotros';
import { Productos } from './pages/Productos';
import { Contacto } from './pages/Contacto';
import { Carrito } from './pages/Carrito';
import Login from './pages/Login';
import Registro from './pages/Registro';








function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registro" element={<Registro />} />

        {/* Página principal */}
        <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />


        {/* Página de blogs */}
        <Route path="/blogs" element={<Blogs />} />

          <Route path="/contacto" element={<Contacto />} />


          <Route path="/categorias" element={<Categorias />} />
            <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/carrito" element={<Carrito />} />
                                                <Route path="/login" element={<Login />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
