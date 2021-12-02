import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import ListadoProductos from "./ListadoProductos";
import AuthContext from "../../context/autenticacion/authContext";

const Productos = () => {
  // Extraer los valores de AuthContext.js
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container col-md-8 listadoE">
      <Sidebar className="sidebar"></Sidebar>

      <ListadoProductos></ListadoProductos>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Productos;
