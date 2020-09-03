import React, { useState } from "react";
import PropTypes from "prop-types";

const Pregunta = (props) => {
  // definir el state
  const [cantidad, setCantidad] = useState(0);

  // Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validar

    // Si se pasa la validacion
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {};

export default Pregunta;
