import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@((profesor\.)?duoc\.cl|gmail\.com)$/; 
// Si quieres permitir duocuc.cl también, cambia por:
// const EMAIL_RE = /^[A-Za-z0-9._%+-]+@((profesor\.)?(duoc|duocuc)\.cl|gmail\.com)$/;

export default function Registro() {
  useEffect(() => {
    document.title = 'Registro — HuertoHogar';
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

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = formRef.current;
    if (!formEl) return;

    setErrorMsg('');
    if (emailRef.current) emailRef.current.setCustomValidity('');

    // Validaciones
    const emailOK = EMAIL_RE.test(email);
    const emailsIguales = email.trim() === emailConfirm.trim();
    const passOK = password.length >= 4 && password.length <= 10;
    const passIguales = password === confirmar;

    // Validación nativa + nuestras reglas
    let mensaje = '';
    if (!emailOK) {
      mensaje = 'El correo debe pertenecer a duoc.cl (o profesor.duoc.cl) o gmail.com.';
      if (emailRef.current) {
        emailRef.current.setCustomValidity(mensaje);
      }
    }
    if (!emailsIguales) {
      mensaje = 'Los correos no coinciden.';
    }
    if (!passOK) {
      mensaje = 'La contraseña debe tener entre 4 y 10 caracteres.';
    }
    if (!passIguales) {
      mensaje = 'Las contraseñas no coinciden.';
    }

    if (!formEl.checkValidity() || !emailOK || !emailsIguales || !passOK || !passIguales) {
      setErrorMsg(mensaje || 'Revisa los campos resaltados.');
      formEl.reportValidity();
      return;
    }

    // Aquí harías el POST real a tu backend
    alert('Registro exitoso ✅');
    setNombre('');
    setEmail('');
    setEmailConfirm('');
    setPassword('');
    setConfirmar('');
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
        <div className="formulario-auth" style={{ maxWidth: 540, margin: '32px auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Registro de usuario</h2>

          <form id="formRegistro" ref={formRef} noValidate onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre completo*</label>
            <input
              id="nombre"
              required
              maxLength={100}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Ana Pérez"
            />

            <label htmlFor="email" style={{ marginTop: 10, display: 'block' }}>Correo*</label>
            <input
              id="email"
              ref={emailRef}
              type="email"
              required
              maxLength={100}
              pattern="^[A-Za-z0-9._%+-]+@((profesor\.)?duoc\.cl|gmail\.com)$"
              placeholder="usuario@duoc.cl / profesor.duoc.cl / gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailRef.current) emailRef.current.setCustomValidity('');
              }}
            />

            <label htmlFor="emailConfirm" style={{ marginTop: 10, display: 'block' }}>Confirmar correo*</label>
            <input
              id="emailConfirm"
              type="email"
              required
              maxLength={100}
              placeholder="Repite tu correo"
              value={emailConfirm}
              onChange={(e) => setEmailConfirm(e.target.value)}
            />

            <label htmlFor="password" style={{ marginTop: 10, display: 'block' }}>Contraseña*</label>
            <input
              id="password"
              type="password"
              required
              minLength={4}
              maxLength={10}
              placeholder="4 a 10 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirmar" style={{ marginTop: 10, display: 'block' }}>Confirmar contraseña*</label>
            <input
              id="confirmar"
              type="password"
              required
              minLength={4}
              maxLength={10}
              placeholder="Repite la contraseña"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
            />

            <button type="submit" style={{ marginTop: 16 }}>Registrar</button>
          </form>

          {/* Feedback de error (único, sin duplicados) */}
          {errorMsg && (
            <p className="errores" style={{ textAlign: 'center', color: '#c00', marginTop: 8 }}>
              {errorMsg}
            </p>
          )}

          <p style={{ textAlign: 'center', marginTop: 8 }}>
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </div>

        <Footer />
      </main>

      <footer></footer>
    </div>
  );
}
