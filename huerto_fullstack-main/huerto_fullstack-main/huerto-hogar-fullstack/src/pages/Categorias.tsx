import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Categorias = () => {
  useEffect(() => {
    document.title = 'HuertoHogar — Categorías';

    // Ejecutar funciones globales si existen (para auth y carrito)
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof (window as any).renderAuthArea === 'function') {
      (window as any).renderAuthArea();
    }
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof (window as any).updateCartBadge === 'function') {
      (window as any).updateCartBadge();
    }
  }, []);

  return (
    <div>
      {/* Barra superior */}
      <header className="topbar">
        <div className="logo">
          <Link to="/" className="brand">🍎 HuertoHogar</Link>
        </div>

        <nav className="menu">
          <Link to="/">HOME</Link> |
          <Link to="/productos">PRODUCTOS</Link> |
          <Link to="/categorias">CATEGORIAS</Link> |
          <Link to="/nosotros">NOSOTROS</Link> |
          <Link to="/blogs">BLOGS</Link> |
          <Link to="/contacto">CONTACTO</Link>
        </nav>

        <div className="topbar-right">
          <Link to="/carrito" className="cart-link">
            🛒 Carrito (<span id="cart-count">0</span>)
          </Link>
          <div id="auth-area"></div>
        </div>
      </header>

      {/* Sub-barra de login */}
      <div className="login-bar">
        <Link to="/login">Iniciar Sesión</Link> |
        <Link to="/registro">Registrarse</Link>
      </div>

      <main>
        {/* ====== CATEGORÍAS ====== */}
        <section className="categorias-section">
          <h2 className="categorias-heading">Categorías y productos de HuertoHogar</h2>

          <div className="categorias-galeria">
            {/* Categoría 1 */}
            <article className="categoria-card">
              <img src="imagenes/frutas-y-verduras.jpg" alt="Frutas Frescas" />
              <h3>Frutas Frescas</h3>
              <p>Manzanas, naranjas, plátanos, uvas y más, directamente del campo a tu mesa.</p>
              <Link to="/productos/frutas" className="btn-outline">Ver productos</Link>
            </article>

            {/* Categoría 2 */}
            <article className="categoria-card">
              <img src="imagenes/verduras-orgánicas.webp" alt="Verduras Orgánicas" />
              <h3>Verduras Orgánicas</h3>
              <p>Zanahorias, espinacas, pimientos y hortalizas cultivadas sin químicos.</p>
              <Link to="/productos/verduras" className="btn-outline">Ver productos</Link>
            </article>

            {/* Categoría 3 */}
            <article className="categoria-card">
              <img src="imagenes/productos organicos.jpg" alt="Productos Orgánicos" />
              <h3>Productos Orgánicos</h3>
              <p>Miel, quinua, semillas, cereales y más alimentos saludables con certificación orgánica.</p>
              <Link to="/productos/organicos" className="btn-outline">Ver productos</Link>
            </article>

            {/* Categoría 4 */}
            <article className="categoria-card">
              <img src="imagenes/Producción de lácteos).jpg" alt="Productos Lácteos" />
              <h3>Productos Lácteos</h3>
              <p>Leche, quesos y yogures frescos de productores locales.</p>
              <Link to="/productos/lacteos" className="btn-outline">Ver productos</Link>
            </article>
          </div>
        </section>
        {/* ====== /CATEGORÍAS ====== */}

        <Footer />
      </main>

      <footer></footer>
    </div>
  );
};

export default Categorias;
