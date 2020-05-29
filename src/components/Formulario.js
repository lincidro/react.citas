import React, { Fragment, useState } from 'react';

const Formulario = (props) => {
  const mascota = {
    nombre: '',
    propietario: '',
    fecha: '',
    hora: '',
    comentarios: '',
  };

  const [cita, actualizarCita] = useState(mascota);

  const handleChange = () => {
    console.log('handleChange');
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label htmlFor='nombre'>Nombre mascota</label>
        <input
          type='text'
          id='nombre'
          name='nombre'
          className='u-full-width'
          placeholder='Nombre mascota'
          onChange={handleChange}
        />

        <label htmlFor='propietario'>Dueño</label>
        <input
          type='text'
          id='propietario'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre del dueño'
          onChange={handleChange}
        />

        <label htmlFor='fecha'>Fecha</label>
        <input
          type='date'
          id='fecha'
          name='fecha'
          className='u-full-width'
          onChange={handleChange}
        />

        <label htmlFor='hora'>Hora</label>
        <input
          type='time'
          id='hora'
          name='hora'
          className='u-full-width'
          onChange={handleChange}
        />

        <label htmlFor='comentarios'>Comentarios</label>
        <textarea
          name='comentarios'
          id='comentarios'
          className='u-full-width'
          onChange={handleChange}
        ></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
