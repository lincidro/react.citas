import React, { Fragment, useState } from 'react';

const mascota = {
  nombre: '',
  propietario: '',
  fecha: '',
  hora: '',
  comentarios: '',
};

const Formulario = (props) => {
  //1 Crear estado
  const [cita, actualizarCita] = useState(mascota);

  //2 Actualizar objeto mascota
  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //3 Extraer valores del state para setear en value
  const { nombre, propietario, fecha, hora, comentarios } = cita;

  //4 Al hacer click en Agregar cita, guardar form
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar

    //Asignar un Id

    //Crear la cita

    //Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre mascota</label>
        <input
          type='text'
          id='nombre'
          name='nombre'
          className='u-full-width'
          placeholder='Nombre mascota'
          onChange={handleChange}
          value={nombre}
        />

        <label htmlFor='propietario'>Dueño</label>
        <input
          type='text'
          id='propietario'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre del dueño'
          onChange={handleChange}
          value={propietario}
        />

        <label htmlFor='fecha'>Fecha</label>
        <input
          type='date'
          id='fecha'
          name='fecha'
          className='u-full-width'
          onChange={handleChange}
          value={fecha}
        />

        <label htmlFor='hora'>Hora</label>
        <input
          type='time'
          id='hora'
          name='hora'
          className='u-full-width'
          onChange={handleChange}
          value={hora}
        />

        <label htmlFor='comentarios'>Comentarios</label>
        <textarea
          name='comentarios'
          id='comentarios'
          className='u-full-width'
          onChange={handleChange}
          value={comentarios}
        ></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
