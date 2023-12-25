import { useContext, createContext, useState } from 'react'
import { TypePaciente } from '../components/types/types';

const pacientesContext = createContext({
  pacientes: [{
    id: '',
    nombreMascota: '',
    nombrePropietario: '',
    correoElectronico: '',
    fecha: '',
    sintomas: ''
  }],
  addPaciente: (newPaciente : TypePaciente) => {},
  deletePaciente: (id: string) => {},
  updatePaciente: (id: string, newPaciente : TypePaciente) => {}
})

export const usePacientesContext = () => useContext(pacientesContext)

function PacientesProvider({ children } : { children: React.ReactNode}) {
  const [pacientes, setPacientes] = useState<Array<TypePaciente>>([])

  const addPaciente = (newPaciente : TypePaciente) => {
    return setPacientes([...pacientes, newPaciente])
  }
  
  const updatePaciente = (id: string, newPaciente : TypePaciente) => {
    let newArrayPacientes = pacientes.filter(paciente => paciente.id != id)
    newArrayPacientes = [...newArrayPacientes, newPaciente]
    return setPacientes(newArrayPacientes)
  }

  const deletePaciente = (id : string ) => {
    const newArrayPacientes = pacientes.filter(paciente => paciente.id != id)
    return setPacientes(newArrayPacientes)
  }

  return (
    <pacientesContext.Provider value={ {pacientes, addPaciente, updatePaciente, deletePaciente} }>
      {children}
    </pacientesContext.Provider>
  )
}

export default PacientesProvider