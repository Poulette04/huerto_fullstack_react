import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@((profesor\.)?duocuc\.cl|(profesor\.)?duoc\.cl|gmail\.com)$/;

export default function Login() {
  useEffect(() => {
    document.title = 'Iniciar sesión - HuertoHogar';
    // Opcional: hooks globales si existen
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

  const formRef = useRef<HTMLFormElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = formRef.current;
    const emailEl = emailRef.current;
    const passEl = passRef.current;
    if (!formEl) return;

    setErrorMsg('');
    if (emailEl) emailEl.setCustomValidity('');

    // Validación nativa + patrón de dominio permitido
    const emailOK = EMAIL_RE.test(email);

    // Reglas de contraseña (min 4, max 10 como tu HTML original)
    const passOK = pass.length >= 4 && pass.length <= 10;

    if (!formEl.checkValidity() || !emailOK || !passOK) {
      if (emailEl && !emailOK) {
        emailEl.setCustomValidity(
          'El correo debe pertenecer a duoc.cl, duocuc.cl, profesor.duoc.cl, profesor.duocuc.cl o gmail.com'
        );
      }
      if (!passOK) {
        setErrorMsg('La contraseña debe tener entre 4 y 10 caracteres.');
      }
      formEl.reportValidity();
      return;
    }

    // Aquí iría tu auth real (fetch/axios a backend). Por ahora, demo:
    alert('Inicio de sesión exitoso ✅');
    setEmail('');
    setPass('');
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

        <div className="topbar-right">
          <Link to="/carrito" className="cart-link">
            🛒 Carrito (<span id="cart-count">0</span>)
          </Link>
          <div id="auth-area"></div>
        </div>
      </header>

      <main>
        <div className="formulario-auth" style={{ maxWidth: 420, margin: '32px auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 8 }}>Iniciar sesión</h2>

          <form id="formLogin" ref={formRef} noValidate onSubmit={handleSubmit}>
            <label htmlFor="login-email">Correo*</label>
            <input
              id="login-email"
              ref={emailRef}
              type="email"
              required
              maxLength={100}
              // pattern solo ayuda a la validación nativa; la fuerte la hacemos con EMAIL_RE
              pattern="^[A-Za-z0-9._%+-]+@((profesor\.)?duocuc\.cl|(profesor\.)?duoc\.cl|gmail\.com)$"
              placeholder="usuario@duoc.cl / profesor.duoc.cl / duocuc.cl / gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // limpiar customValidity al teclear
                if (emailRef.current) emailRef.current.setCustomValidity('');
              }}
            />

            <label htmlFor="login-pass" style={{ marginTop: 12, display: 'block' }}>Contraseña*</label>
            <input
              id="login-pass"
              ref={passRef}
              type="password"
              required
              minLength={4}
              maxLength={10}
              placeholder="4 a 10 caracteres"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button type="submit" style={{ marginTop: 16 }}>Entrar</button>
          </form>

          {/* Feedback de error (único, sin duplicados) */}
          {errorMsg && (
            <p className="errores" style={{ textAlign: 'center', color: '#c00', marginTop: 6 }}>
              {errorMsg}
            </p>
          )}

          <p style={{ textAlign: 'center', marginTop: 8 }}>
            ¿No tienes cuenta? <Link to="/registro">Crea una aquí</Link>
          </p>
        </div>

        <Footer />
      </main>

      <footer></footer>
    </div>
  );
}
