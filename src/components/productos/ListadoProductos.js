import React, { useContext, useEffect } from "react";
import Producto from "./Producto";
import productoContext from "../../context/productos/productoContext";

const ListadoProductos = () => {
  // Obtener el state de productos
  const productosContext = useContext(productoContext);

  // Extraer productos del State inicial
  const { productos, obtenerProductos } = productosContext;

  // Obtener productos cuando carga el componenete
  useEffect(() => {
    obtenerProductos();

    // eslint-disable-next-line
  }, []);

  // Validar si productos tiene contenido
  if (productos.length === 0) {
    return (
      <div>
        <br />
        <br />

        <h4>No hay Estudiantes...</h4>
      </div>
    );
  }

  return (
    <div>
      <h2>Tus estudiantes</h2>
      <br/>
      <br/>
      <div class="accordion" id="">
      {productos.map((i, j) => (
            <Producto key={i._id} producto={i} numero={(j += 1)}></Producto>
          ))}
      </div>
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Correo</th>
            <th scope="col">No. de identificación</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((i, j) => (
            <Producto key={i._id} producto={i} numero={(j += 1)}></Producto>
          ))}
        </tbody>
      </table> */}

    </div>
  );
};

export default ListadoProductos;
