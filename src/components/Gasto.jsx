import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto, eliminarGasto }) => {
  const { id } = gasto;
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}
        <span className="gastoEliminar">
          <span className="gasto">$ {gasto.cantidad}</span>
          <span
            className="eliminar"
            title="Eliminar"
            onClick={() => eliminarGasto(id)}
          >
            &times;
          </span>
        </span>
      </p>
    </li>
  );
};

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
};

export default Gasto;
