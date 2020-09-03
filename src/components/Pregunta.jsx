import React from "react";
import PropTypes from "prop-types";

const Pregunta = (props) => {
  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
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
