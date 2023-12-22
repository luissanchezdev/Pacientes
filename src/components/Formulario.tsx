import { useState, useCallback } from 'react'
import { NOTIFICATION_TYPES } from '../constants/enums'
import Notification from './ui/Notification'

function Formulario() {
  const [nombreMascota, setNombreMascota] = useState<string>('Minino')
  const [nombrePropietario, setNombrePropietario] = useState<string>('Luis Sanchez')
  const [correoPropietario, setCorreoPropietario] = useState<string>('example@example.com')
  const [fecha, setFecha] = useState<string>('')
  const [sintomas, setSintomas] = useState<string>('')
  const [notificationType, setNotificationType] = useState<NOTIFICATION_TYPES | null>(null)

  const handleNombreMascota = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNombreMascota(e.target.value)
  }

  const handleNombrePropietario = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNombrePropietario(e.target.value)
  }

  const handleCorreoPropietario = (e : React.ChangeEvent<HTMLInputElement>) => {
    setCorreoPropietario(e.target.value)
  }

  const handleFecha = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFecha(e.target.value)
  }

  const handleSintomas = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    setSintomas(e.target.value)
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)

    let regexString = /\d/
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let regexDate = /\d{1,2}\-\d{1,2}\-\d{2,4}/g

    if([nombreMascota, nombrePropietario, correoPropietario, fecha, sintomas].includes('')) {
      return setNotificationType(NOTIFICATION_TYPES.EMPTYFIELD)
    } 

    if(regexString.test(nombreMascota)) {
      console.log('nombreMascota no paso la validacion')
      return setNotificationType(NOTIFICATION_TYPES.NOSTRING)
    }

    if(regexString.test(nombrePropietario)) {
      console.log('nombrePropietario no paso la validacion')
      return setNotificationType(NOTIFICATION_TYPES.NOSTRING)
    }

    if(!regexEmail.test(correoPropietario)) {
      console.log('correoPropietario no paso la validacion')
      return setNotificationType(NOTIFICATION_TYPES.ERROREMAIL)
    }

    if(!regexDate.test(fecha)) {
      console.log('fecha no paso la validacion')
      return setNotificationType(NOTIFICATION_TYPES.ERRORDATE)
    }

    setNotificationType(NOTIFICATION_TYPES.SUCCESS)

    setTimeout(() => {
      setNotificationType(null)
    },5000)

    setNombreMascota('')
    setNombrePropietario('')
    setCorreoPropietario('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="w-full lg:max-w-[600px] py-5 mx-auto">
      <h2 className="text-center text-2xl">Seguimiento de pacientes</h2>
      <h3 className="text-lg text-center text-black">Añadir y <span className="text-primary">Administrar</span></h3>
      <form id="form" className="form" onSubmit={e => handleSubmit(e)}>
        <label htmlFor='nombre-mascota' className="label">Nombre Mascota</label>
        <input 
          type='text' 
          id='nombre-mascota'
          name='nombre-mascota' 
          placeholder="Minino" 
          className="input" 
          value={nombreMascota}
          onChange={ e => handleNombreMascota(e)}
          />
          
        <label htmlFor='nombre-propietario' className="label">Nombre Propietario</label>
        <input 
          type='text' 
          id='nombre-propietario'
          name='nombre-propietario' 
          placeholder="Luis Sanchez" 
          className="input" 
          value={nombrePropietario}
          onChange={ e => handleNombrePropietario(e)}
          />
        <label htmlFor='correo-propietario' className="label">Correo electrónico</label>
        <input 
          type='email' 
          id='correo-propietario' 
          name='correo-propietario'
          placeholder="example@example.com" 
          className="input" 
          value={correoPropietario}
          onChange={ e => handleCorreoPropietario(e)}
          />
        <label htmlFor='fecha' className="label">Fecha de alta</label>
        <input 
          type='date' 
          id='fecha' 
          name='fecha'
          className="input" 
          value={fecha}
          onChange={ e => handleFecha(e)}
          />
        <label htmlFor="sintomas" className='label'>Sintomas</label>
        <textarea 
          id="sintomas" 
          name="sintomas"
          className="textarea"
          value={sintomas}
          onChange={ e => handleSintomas(e)}
        />
        <input 
          type='submit' value='Añadir paciente' className="btn-submit" />
      </form>
      { notificationType && <Notification notificationType={ notificationType } /> }
    </div>
  )
}

export default Formulario