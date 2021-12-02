import React, { useContext } from "react";
import productoContext from "../../context/productos/productoContext";

const Producto = ({ producto, numero }) => {
  // Extraer el State de producto
  const productosContext = useContext(productoContext);
  const { eliminarProducto, guardarProductoActual } = productosContext;

  // Eliminar Producto
  const onClickEliminarProducto = () => {
    eliminarProducto(producto._id);
  };

  // Actualizar Producto
  const seleccionarProducto = (producto) => {
    guardarProductoActual(producto);
  };

  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={numero}>
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          {numero}. {producto.nombre}
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div class="accordion-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <b>Correo: </b>
                {producto.cantidad}
              </p>
              <p>
                <b>No. de identificación: </b>
                {producto.precio}
              </p>
            </div>
            <div className="col-md-6 botones" >
              <button
                className="btn btn-warning"
                id="editar"
                onClick={() => seleccionarProducto(producto)}
              >
                Actualizar
              </button>
              <button
                className="btn btn-danger"
                onClick={onClickEliminarProducto}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;

/* <tr>
      <th scope="row">{numero}</th>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.precio}</td>
      <td>
        <button className="btn btn-warning" id="editar" onClick={() => seleccionarProducto(producto)}>
          Actualizar
        </button>
        <button className="btn btn-danger" onClick={onClickEliminarProducto}>
          Eliminar
        </button>
      </td>
    </tr> */
