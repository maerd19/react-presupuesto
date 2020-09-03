import React, { useState } from "react";

const Formulario = () => {
  // definir State
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);

  // Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar

    // Construir el gasto

    // Pasar el gasto al componente principal

    // Resetear Form
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
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

export default Formulario;
