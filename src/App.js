import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //Arreglo de citas
  const [citas, setCitas] = useState([]);

  //useEffect
  useEffect(() => {
    console.log('useEffect - citas');
  }, [citas]);

  //Crear cita
  const crearCita = (citaDelFormulario) => {
    setCitas([...citas, citaDelFormulario]);
  };

  //Eliminar cita
  const eliminarCita = (id) => {
    console.log('Eliminar cita');
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Citas agendadas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <h1>Crear cita</h1>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            <h1>{titulo}</h1>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
