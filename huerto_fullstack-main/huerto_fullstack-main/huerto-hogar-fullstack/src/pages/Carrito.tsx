import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Carrito = () => {
  useEffect(() => {
    document.title = 'Carrito — HuertoHogar';
    // Opcional: funciones globales
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
    // 1) Página a full alto y en columna
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
            🛒 Carrito (<span id="cart-count">3</span>)
          </Link>
          <div id="auth-area"></div>
        </div>
      </header>

      {/* 2) El main ocupa el espacio disponible */}
      <main
        className="cart-page"
        style={{
          flex: 1,
          maxWidth: 1200,
          margin: '30px auto',
          padding: '0 20px',
          textAlign: 'left'
        }}
      >
        <h2 style={{ marginBottom: 16 }}>Carrito de compras</h2>

        <div
          className="cart-wrapper"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}
        >
          {/* Lista de productos */}
          <section
            className="cart-list"
            id="cart-list"
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {/* Item 1 */}
            <article
              className="cart-item"
              style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: 12,
                display: 'grid',
                gridTemplateColumns: '92px 1fr auto',
                gap: 14,
                alignItems: 'center'
              }}
            >
              <img
                src="imagenes/manzana_fuji.jpg"
                alt="Manzanas Fuji"
                style={{ width: 92, height: 92, objectFit: 'cover', borderRadius: 8 }}
              />
              <div>
                <h4 style={{ margin: '0 0 6px' }}>Manzanas Fuji</h4>
                <div className="price" style={{ color: '#2E8B57', fontWeight: 700 }}>
                  $1.990 / kg
                </div>
                <small>Código: FR001</small>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="qty" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <label htmlFor="qty1">Cant.</label>
                  <input
                    id="qty1"
                    type="number"
                    value={2}
                    min={1}
                    style={{
                      width: 70,
                      height: 36,
                      padding: '0 8px',
                      border: '1px solid #cfd4dc',
                      borderRadius: 8
                    }}
                    disabled
                    readOnly
                  />
                </div>
                <div
                  className="line-total"
                  style={{ minWidth: 110, textAlign: 'right', fontWeight: 700, color: '#2E8B57' }}
                >
                  $3.980
                </div>
                <button
                  className="remove"
                  style={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '8px 10px',
                    cursor: 'not-allowed'
                  }}
                  disabled
                >
                  ✕
                </button>
              </div>
            </article>

            {/* Item 2 */}
            <article
              className="cart-item"
              style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: 12,
                display: 'grid',
                gridTemplateColumns: '92px 1fr auto',
                gap: 14,
                alignItems: 'center'
              }}
            >
              <img
                src="imagenes/naranjas_valencia.jpg"
                alt="Naranjas Valencia"
                style={{ width: 92, height: 92, objectFit: 'cover', borderRadius: 8 }}
              />
              <div>
                <h4 style={{ margin: '0 0 6px' }}>Naranjas Valencia</h4>
                <div className="price" style={{ color: '#2E8B57', fontWeight: 700 }}>
                  $2.490 / kg
                </div>
                <small>Código: FR002</small>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="qty" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <label htmlFor="qty2">Cant.</label>
                  <input
                    id="qty2"
                    type="number"
                    value={1}
                    min={1}
                    style={{
                      width: 70,
                      height: 36,
                      padding: '0 8px',
                      border: '1px solid #323f53ff',
                      borderRadius: 8
                    }}
                    disabled
                    readOnly
                  />
                </div>
                <div
                  className="line-total"
                  style={{ minWidth: 110, textAlign: 'right', fontWeight: 700, color: '#2E8B57' }}
                >
                  $2.490
                </div>
                <button
                  className="remove"
                  style={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '8px 10px',
                    cursor: 'not-allowed'
                  }}
                  disabled
                >
                  ✕
                </button>
              </div>
            </article>

            {/* Item 3 */}
            <article
              className="cart-item"
              style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: 12,
                display: 'grid',
                gridTemplateColumns: '92px 1fr auto',
                gap: 14,
                alignItems: 'center'
              }}
            >
              <img
                src="imagenes/leche-entera.jpg"
                alt="Leche Entera"
                style={{ width: 92, height: 92, objectFit: 'cover', borderRadius: 8 }}
              />
              <div>
                <h4 style={{ margin: '0 0 6px' }}>Leche Entera</h4>
                <div className="price" style={{ color: '#2E8B57', fontWeight: 700 }}>
                  $1.200 / und
                </div>
                <small>Código: PL001</small>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="qty" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <label htmlFor="qty3">Cant.</label>
                  <input
                    id="qty3"
                    type="number"
                    value={2}
                    min={1}
                    style={{
                      width: 70,
                      height: 36,
                      padding: '0 8px',
                      border: '1px solid #cfd4dc',
                      borderRadius: 8
                    }}
                    disabled
                    readOnly
                  />
                </div>
                <div
                  className="line-total"
                  style={{ minWidth: 110, textAlign: 'right', fontWeight: 700, color: '#2E8B57' }}
                >
                  $2.400
                </div>
                <button
                  className="remove"
                  style={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '8px 10px',
                    cursor: 'not-allowed'
                  }}
                  disabled
                >
                  ✕
                </button>
              </div>
            </article>
          </section>

          {/* Resumen */}
          <aside
            className="cart-summary"
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 16,
              height: 'max-content',
              boxShadow: '0 6px 18px rgba(0,0,0,.05)'
            }}
          >
            <h3 style={{ marginTop: 0 }}>Resumen</h3>
            <dl style={{ margin: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '6px 0' }}>
                <dt>Subtotal</dt>
                <dd>$8.870</dd>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '6px 0' }}>
                <dt>Envío</dt>
                <dd>$0</dd>
              </div>
              <div
                className="total"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '10px 0',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}
              >
                <dt>Total</dt>
                <dd>$8.870</dd>
              </div>
            </dl>

            <button
              type="button"
              style={{
                width: '100%',
                padding: 12,
                border: 'none',
                borderRadius: 10,
                fontWeight: 800,
                background: '#2E8B57',
                color: '#fff',
                cursor: 'not-allowed'
              }}
              disabled
            >
              Proceder al pago
            </button>
            <button
              type="button"
              style={{
                width: '100%',
                padding: 12,
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                fontWeight: 700,
                background: '#fff',
                color: '#111',
                marginTop: 8,
                cursor: 'not-allowed'
              }}
              disabled
            >
              Vaciar carrito
            </button>

            <Link
              to="/productos"
              style={{
                display: 'inline-block',
                marginTop: 10,
                color: '#2E8B57',
                textDecoration: 'none',
                fontWeight: 700
              }}
            >
              ← Seguir comprando
            </Link>
          </aside>
        </div>
      </main>

      {/* 3) Footer fuera del main y sin footer vacío duplicado */}
      <Footer />
    </div>
  );
};

export default Carrito;
