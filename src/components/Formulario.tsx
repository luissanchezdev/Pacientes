import { useState, useCallback, useEffect } from 'react'
import { NOTIFICATION_TYPES } from '../constants/enums'
import Notification from './ui/Notification'
import { usePacientesContext } from '../hooks/PacientesProvider'
import { TypeFormulario } from './types/types'
import { regexString, regexDate, regexEmail } from '../constants/regexValidations'
import { currentDate } from '../constants'

const dataForDefault = {
  id: crypto.randomUUID(),
  nombreMascota: 'Misifu',
  nombrePropietario: 'Luis',
  correoElectronico: 'luiss@example.com',
  fecha: currentDate,
  sintomas: 'Come mucho'
}

function Formulario({ modalState = false, dataPaciente = dataForDefault, handleShowModal } : TypeFormulario ) {
  const { addPaciente, updatePaciente } = usePacientesContext()
  const [nombreMascota, setNombreMascota] = useState<string>(dataPaciente.nombreMascota)
  const [nombrePropietario, setNombrePropietario] = useState<string>(dataPaciente.nombrePropietario)
  const [correoElectronico, setCorreoPropietario] = useState<string>(dataPaciente.correoElectronico)
  const [fecha, setFecha] = useState<string>(dataPaciente.fecha)
  const [sintomas, setSintomas] = useState<string>(dataPaciente.sintomas)
  const [notificationType, setNotificationType] = useState<NOTIFICATION_TYPES | null>(null)

  const resetForm = () => {
    setNombreMascota('')
    setNombrePropietario('')
    setCorreoPropietario('')
    setFecha('')
    setSintomas('')
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if([nombreMascota, nombrePropietario, correoElectronico, fecha, sintomas].includes('')) {
      return setNotificationType(NOTIFICATION_TYPES.EMPTYFIELD)
    } 

    // Validaciones
    if(regexString.test(nombreMascota)) { 
      return setNotificationType(NOTIFICATION_TYPES.NOSTRING)
    }

    if(regexString.test(nombrePropietario)) {
      return setNotificationType(NOTIFICATION_TYPES.NOSTRING)
    }

    if(!regexEmail.test(correoElectronico)) {
      return setNotificationType(NOTIFICATION_TYPES.ERROREMAIL)
    }
    /* 
    if(!regexDate.test(fecha)) {
      return setNotificationType(NOTIFICATION_TYPES.ERRORDATE)
    }
    */

    const newPaciente = {
      id: crypto.randomUUID(),
      nombreMascota,
      nombrePropietario,
      correoElectronico,
      fecha,
      sintomas
    }

    addPaciente(newPaciente)

    setNotificationType(NOTIFICATION_TYPES.SUCCESS)

    setTimeout(() => {
      setNotificationType(null)
    },5000)

    resetForm()
  }

  useEffect(() => {
    setNombreMascota(dataPaciente?.nombreMascota)
    setNombrePropietario(dataPaciente?.nombrePropietario)
    setCorreoPropietario(dataPaciente?.correoElectronico)
    setFecha(dataPaciente?.fecha)
    setSintomas(dataPaciente?.sintomas)
  }, [dataPaciente])


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
          onChange={ (e) => setNombreMascota(e.target.value)}
          />
          
        <label htmlFor='nombre-propietario' className="label">Nombre Propietario</label>
        <input 
          type='text' 
          id='nombre-propietario'
          name='nombre-propietario' 
          placeholder="Luis Sanchez" 
          className="input" 
          value={nombrePropietario}
          onChange={ e => setNombrePropietario(e.target.value)}
          />
        <label htmlFor='correo-propietario' className="label">Correo electrónico</label>
        <input 
          type='text' 
          id='correo-propietario' 
          name='correo-propietario'
          placeholder="example@example.com" 
          className="input" 
          value={correoElectronico}
          onChange={ e => setCorreoPropietario(e.target.value)}
          />
        <label htmlFor='fecha' className="label">Fecha de alta</label>
        <input 
          type='date' 
          id='fecha' 
          name='fecha'
          className="input" 
          value={fecha}
          onChange={ e => setFecha(e.target.value)}
          />
        <label htmlFor="sintomas" className='label'>Sintomas</label>
        <textarea 
          id="sintomas" 
          name="sintomas"
          className="textarea"
          value={sintomas}
          onChange={ e => setSintomas(e.target.value)}
        />
        { !modalState && (
          <input 
          type='submit' value='Añadir paciente' className="btn-submit" />
        ) }
        { modalState && (
          <div className="paciente_actions">
          <button 
            type='button'
            className="btn btn-edit"
            onClick={() => {
              updatePaciente(dataPaciente.id, {
                id: dataPaciente.id,
                nombreMascota: nombreMascota,
                nombrePropietario: nombrePropietario,
                correoElectronico: correoElectronico,
                fecha: fecha,
                sintomas: sintomas
              })
              resetForm()
              handleShowModal()
            }}
          >Actualizar</button>
          <button 
            type='button'
            className='btn btn-delete'
            onClick={ () => {
              resetForm()
              handleShowModal()
            } }
          >Cancelar</button>
        </div>
        )}
      </form>
      { notificationType && <Notification notificationType={ notificationType } /> }
    </div>
  )
}

export default Formulario