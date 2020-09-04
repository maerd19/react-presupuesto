import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // definir State
  // Valores para el formulario inicial
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastoTotal, setgastoTotal] = useState(0);
  const [pregunta, setPregunta] = useState(true);
  // Almacenamiento de los gastos
  const [gastos, setGastos] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);
  // Agregar un nuevo gasto
  const [gasto, setGasto] = useState({});

  // UseEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      // Agrega gasto al nuevo presupuesto
      setGastos([...gastos, gasto]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      // Actualizar gasto total
      let total = gastoTotal;
      setgastoTotal(total + gasto.cantidad);

      // Resetear a false
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante, gastoTotal]);

  // Eliminar gasto del presupuesto
  const eliminarGasto = (id) => {
    // Agregar al presupuesto actual
    const gastoEliminado = gastos.filter((gasto) => gasto.id === id);
    setRestante(restante + gastoEliminado[0].cantidad);

    // Actualizar gasto total
    let total = gastoTotal;
    setgastoTotal(total - gastoEliminado[0].cantidad);

    // Remover gasto del listado
    const nuevaListaGastos = gastos.filter((gasto) => gasto.id !== id);
    setGastos(nuevaListaGastos);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {pregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} eliminarGasto={eliminarGasto} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                  gastoTotal={gastoTotal}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
