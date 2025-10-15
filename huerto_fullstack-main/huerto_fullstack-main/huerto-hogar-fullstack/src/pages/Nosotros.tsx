import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Nosotros = () => {
  useEffect(() => {
    document.title = 'HuertoHogar — Nosotros';

    // Opcional: si existen funciones globales para auth/carrito:
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof (window as any).renderAuthArea === 'function') {
      // @ts-ignore
      (window as any).renderAuthArea();
    }
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof (window as any).updateCartBadge === 'function') {
      // @ts-ignore
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
        {/* ====== NOSOTROS ====== */}
        <section
          className="nosotros"
          style={{ maxWidth: 1000, margin: '40px auto', padding: 20 }}
        >
          <h2
            className="nosotros-heading"
            style={{ textAlign: 'center', marginBottom: 20, color: '#2E8B57' }}
          >
            Sobre HuertoHogar
          </h2>

          <p style={{ lineHeight: 1.6, textAlign: 'justify', marginBottom: 30 }}>
            <strong>HuertoHogar</strong> es una tienda online dedicada a llevar la frescura y calidad de los productos
            del campo directamente a la puerta de nuestros clientes en Chile. Con más de 6 años de experiencia,
            operamos en más de 9 puntos a lo largo del país, incluyendo ciudades clave como Santiago, Puerto Montt,
            Villarica, Nacimiento, Viña del Mar, Valparaíso y Concepción. Nuestra misión es conectar a las familias
            chilenas con el campo, promoviendo un estilo de vida saludable y sostenible.
          </p>

          <section
            className="nosotros-mision"
            style={{ maxWidth: 1000, margin: '40px auto 0', padding: 20 }}
          >
            <h3 style={{ marginBottom: 12 }}>Misión</h3>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              Nuestra misión es proporcionar productos frescos y de calidad directamente desde el campo hasta la puerta
              de nuestros clientes, garantizando la frescura y el sabor en cada entrega. Nos comprometemos a fomentar
              una conexión más cercana entre los consumidores y los agricultores locales, apoyando prácticas agrícolas
              sostenibles y promoviendo una alimentación saludable en todos los hogares chilenos.
            </p>
          </section>
        </section>
        {/* ====== /NOSOTROS ====== */}

        <Footer />
      </main>

      <footer></footer>
    </div>
  );
};

export default Nosotros;
