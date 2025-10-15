import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Productos = () => {
  useEffect(() => {
    document.title = 'Productos - HuertoHogar';

    // Opcional: funciones globales si existen
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

      <main>
        <section className="productos-lista">
          <h2>Todos los productos</h2>

          <div className="galeria">
            {/* ===== Frutas Frescas ===== */}
            <div className="producto">
              <Link to="/detalle/1">
                <img src="imagenes/manzana_fuji.jpg" alt="Manzanas Fuji" />
                <h3>FR001 - Manzanas Fuji</h3>
              </Link>
              <p className="precio">$1.200 / kg</p>
              <button
                className="add-to-cart"
                data-id="1"
                data-nombre="Manzanas Fuji"
                data-precio="1200"
              >
                Añadir
              </button>
            </div>

            <div className="producto">
              <Link to="/detalle/2">
                <img src="imagenes/naranjas_valencia.jpg" alt="Naranjas Valencia" />
                <h3>FR002 - Naranjas Valencia</h3>
              </Link>
              <p className="precio">$1.000 / kg</p>
              <button
                className="add-to-cart"
                data-id="2"
                data-nombre="Naranjas Valencia"
                data-precio="1000"
              >
                Añadir
              </button>
            </div>

            <div className="producto">
              <Link to="/detalle/3">
                <img src="imagenes/Cavendish_Banannas.jpg" alt="Plátanos Cavendish" />
                <h3>FR003 - Plátanos Cavendish</h3>
              </Link>
              <p className="precio">$800 / kg</p>
              <button
                className="add-to-cart"
                data-id="3"
                data-nombre="Plátanos Cavendish"
                data-precio="800"
              >
                Añadir
              </button>
            </div>

            {/* ===== Verduras Orgánicas ===== */}
            <div className="producto">
              <Link to="/detalle/5">
                <img src="imagenes/zanahoria.jpg" alt="Zanahorias Orgánicas" />
                <h3>VR001 - Zanahorias Orgánicas</h3>
              </Link>
              <p className="precio">$900 / kg</p>
              <button
                className="add-to-cart"
                data-id="5"
                data-nombre="Zanahorias Orgánicas"
                data-precio="900"
              >
                Añadir
              </button>
            </div>

            <div className="producto">
              <Link to="/detalle/6">
                <img src="imagenes/espinacas.png" alt="Espinacas Frescas" />
                <h3>VR002 - Espinacas Frescas</h3>
              </Link>
              <p className="precio">$700 / paquete</p>
              <button
                className="add-to-cart"
                data-id="6"
                data-nombre="Espinacas Frescas"
                data-precio="700"
              >
                Añadir
              </button>
            </div>

            <div className="producto">
              <Link to="/detalle/7">
                <img src="imagenes/pimientos.jpg" alt="Pimientos Tricolores" />
                <h3>VR003 - Pimientos Tricolores</h3>
              </Link>
              <p className="precio">$1.500 / kg</p>
              <button
                className="add-to-cart"
                data-id="7"
                data-nombre="Pimientos Tricolores"
                data-precio="1500"
              >
                Añadir
              </button>
            </div>

            {/* ===== Productos Orgánicos ===== */}
            <div className="producto">
              <Link to="/detalle/9">
                <img src="imagenes/miel-organica.jpg" alt="Miel Orgánica" />
                <h3>PO001 - Miel Orgánica</h3>
              </Link>
              <p className="precio">$5.000 / frasco</p>
              <button
                className="add-to-cart"
                data-id="9"
                data-nombre="Miel Orgánica"
                data-precio="5000"
              >
                Añadir
              </button>
            </div>

            <div className="producto">
              <Link to="/detalle/10">
                <img src="imagenes/quinua-organica.jpg" alt="Quinua Orgánica" />
                <h3>PO003 - Quinua Orgánica</h3>
              </Link>
              <p className="precio">$2.100 / paquete</p>
              <button
                className="add-to-cart"
                data-id="10"
                data-nombre="Quinua Orgánica"
                data-precio="2100"
              >
                Añadir
              </button>
            </div>

            {/* ===== Productos Lácteos ===== */}
            <div className="producto">
              <Link to="/detalle/13">
                <img src="imagenes/leche-entera.jpg" alt="Leche Entera" />
                <h3>PL001 - Leche Entera</h3>
              </Link>
              <p className="precio">$1.250 / litro</p>
              <button
                className="add-to-cart"
                data-id="13"
                data-nombre="Leche Entera"
                data-precio="1250"
              >
                Añadir
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <footer></footer>
    </div>
  );
};

export default Productos;
