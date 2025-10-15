import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const EMAIL_DOMAIN_RE = /^[A-Za-z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [chars, setChars] = useState(0);
  const formRef = useRef<HTMLFormElement | null>(null);
  const correoRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.title = 'HuertoHogar — Contacto';

    // Opcional: si existen funciones globales (auth/carrito) definidas en script.js
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

  useEffect(() => {
    setChars(comentario.length);
  }, [comentario]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formEl = formRef.current;
    const emailEl = correoRef.current;
    if (!formEl) return;

    // reset custom error
    if (emailEl) emailEl.setCustomValidity('');

    // validación nativa + dominio permitido
    const emailOK = EMAIL_DOMAIN_RE.test(correo);

    if (!formEl.checkValidity() || !emailOK) {
      e.preventDefault();
      if (emailEl && !emailOK) {
        emailEl.setCustomValidity(
          'El correo debe pertenecer a duoc.cl, profesor.duoc.cl o gmail.com'
        );
      }
      formEl.reportValidity();
      return;
    }

    e.preventDefault();
    // Aquí iría tu envío real (fetch/axios). Por ahora, feedback simple:
    alert('Mensaje enviado ✅');
    setNombre('');
    setCorreo('');
    setComentario('');
  };

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

        {/* Derecha: carrito + sesión */}
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
        {/* Encabezado */}
        <section className="contacto-header">
          <div className="logo">
            <Link to="/" className="brand">🍎 HuertoHogar</Link>
          </div>
          <h2>HuertoHogar</h2>
        </section>

        {/* Formulario */}
        <section className="formulario-contacto">
          <h3>FORMULARIO DE CONTACTO</h3>

          <form id="contact-form" ref={formRef} noValidate onSubmit={handleSubmit}>
            {/* Nombre */}
            <label htmlFor="nombre">
              Nombre completo <span className="req">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              maxLength={100}
              placeholder="Ej: Ana Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <small>Requerido — Máx. 100 caracteres.</small>

            {/* Correo */}
            <label htmlFor="correo">
              Correo <span className="req">*</span>
            </label>
            <input
              ref={correoRef}
              type="email"
              id="correo"
              name="correo"
              required
              maxLength={100}
              // pattern solo como ayuda para validación nativa; la fuerte la hacemos en handleSubmit
              pattern="^[A-Za-z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$"
              placeholder="usuario@duoc.cl / @profesor.duoc.cl / @gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <small>
              Acepta únicamente @duoc.cl, @profesor.duoc.cl o @gmail.com — Máx. 100 caracteres.
            </small>

            {/* Comentario */}
            <label htmlFor="comentario">
              Comentario <span className="req">*</span>
            </label>
            <textarea
              id="comentario"
              name="comentario"
              required
              maxLength={500}
              placeholder="Escribe tu mensaje…"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            />
            <div className="hint-row">
              <small>Requerido — Máx. 500 caracteres.</small>
              <small id="contador-comentario">{chars} / 500</small>
            </div>

            {/* Botón */}
            <button type="submit">ENVIAR MENSAJE</button>
          </form>
        </section>

        <Footer />
      </main>

      <footer></footer>
    </div>
  );
};

export default Contacto;
