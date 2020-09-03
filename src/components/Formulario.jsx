import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto }) => {
  // definir State
  const [form, setForm] = useState({
    nombre: "",
    cantidad: 0,
  });
  const [error, setError] = useState(false);

  // Actualizar State
  const actualizarState = (e) => {
    // Eliminar mensaje de error
    setError(false);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Destructuring del form en el State
  const { nombre, cantidad } = form;

  // Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }

    // Construir el gasto
    const gasto = {
      nombre,
      cantidad: parseInt(cantidad, 10),
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    // Resetear Form
    setForm({ nombre: "", cantidad: 0 });
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={actualizarState}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          name="cantidad"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={actualizarState}
        />
      </div>

      <input
        type="submit"
        value="Agregar Gasto"
        className="button-primary u-full-width"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
