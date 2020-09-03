export const revisarPresupuesto = (presupuesto, restante) => {
  // Queda mas del 50% del presupuesto
  let clase = "alert alert-success";
  // Queda el 25% del presupuesto
  if (presupuesto / 4 > restante) clase = "alert alert-danger";
  // Queda el 50% del presupuesto
  if (presupuesto / 2 > restante) clase = "alert alert-warning";

  return clase;
};
