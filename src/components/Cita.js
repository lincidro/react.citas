import React from 'react';

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className='cita'>
      <p>
        Mascota: <span>{cita.nombre}</span>
      </p>
      <p>
        Mascota: <span>{cita.propietario}</span>
      </p>
      <p>
        Mascota: <span>{cita.fecha}</span>
      </p>
      <p>
        Mascota: <span>{cita.hora}</span>
      </p>
      <p>
        Mascota: <span>{cita.comentarios}</span>
      </p>
      <button
        className='button eliminar u-full-width'
        onClick={() => eliminarCita(cita.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Cita;
