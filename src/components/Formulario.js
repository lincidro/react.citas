import React, { Fragment } from 'react';

const Formulario = (props) => {
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
        />

        <label htmlFor='propietario'>Dueño</label>
        <input
          type='text'
          id='propietario'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre del dueño'
        />

        <label htmlFor='fecha'>Fecha</label>
        <input type='date' id='fecha' name='fecha' className='u-full-width' />

        <label htmlFor='hora'>Hora</label>
        <input type='time' id='hora' name='hora' className='u-full-width' />

        <label htmlFor='comentarios'>Comentarios</label>
        <textarea name='comentarios' id='comentarios' className='u-full-width'></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
