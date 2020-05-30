import React from 'react';

const Cita = ({ cita }) => {
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
    </div>
  );
};

export default Cita;
