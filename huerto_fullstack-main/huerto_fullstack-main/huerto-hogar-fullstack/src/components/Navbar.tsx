import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-semibold">
  AsesoríasTech
</NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Productos
                </NavLink>
              </li>
             <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <NavLink to="/register" className="btn btn-light">
  Registrarse
</NavLink>
              <NavLink to="/login" className="btn btn-light">
  Login
</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
