import React from "react";

const Navbar = () => {
  const token = localStorage.getItem("token");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a id='brand' className="navbar-brand" href="/">
          DataStudent
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registro">
                Registro
              </a>
            </li>
            {token? <li className="nav-item">
              <a className="nav-link" href="/productos">
               Estudiantes
              </a>
            </li>: null}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
