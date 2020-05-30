import React, { useState, Fragment } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //Arreglo de citas
  const [citas, setCitas] = useState([]);

  const crearCita = (citaDelFormulario) => {
    setCitas([...citas, citaDelFormulario]);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
